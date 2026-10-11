#!/usr/bin/env python3
"""letter-stats.sql 의 TSV → src/data/letterStats.ts 에 넣을 숫자(JSON). 사람이 판단할 부분이 없게 정의를 여기 고정한다.

- 길이: 글자 수 중앙값. 나라별은 표본 20통 이상인 나라만.
- 쓴 시각: 보낸 사람 나라의 현지 시각. 시간대가 여러 개인 나라(미국·브라질·러시아 등)는 시각을 정할 수 없어 뺀다.
- 배달: 2.0(2026-09-15 이후)에 쓴 대화 편지의 실제 도착 시각 - 쓴 시각. 국내/국제.
- 답장: 상대 편지가 도착한 뒤 답장을 쓰기까지 걸린 시간(답장이 이어진 경우만).
- 첫 인사말: 대화를 여는 편지(답장 아님)의 첫 단어. 라틴 문자 편지·한글 편지 따로.
"""
import csv, json, re, sys, collections, statistics as st
from datetime import datetime, timezone
from zoneinfo import ZoneInfo

SINGLE_TZ = {'KR':'Asia/Seoul','IN':'Asia/Kolkata','TR':'Europe/Istanbul','GB':'Europe/London','NG':'Africa/Lagos','PH':'Asia/Manila',
 'CN':'Asia/Shanghai','AE':'Asia/Dubai','JP':'Asia/Tokyo','TW':'Asia/Taipei','GH':'Africa/Accra','UG':'Africa/Kampala','PK':'Asia/Karachi',
 'CI':'Africa/Abidjan','MA':'Africa/Casablanca','HK':'Asia/Hong_Kong','DE':'Europe/Berlin','FR':'Europe/Paris','KE':'Africa/Nairobi',
 'VN':'Asia/Ho_Chi_Minh','EG':'Africa/Cairo','SA':'Asia/Riyadh','IT':'Europe/Rome','ES':'Europe/Madrid','TH':'Asia/Bangkok',
 'MY':'Asia/Kuala_Lumpur','ZA':'Africa/Johannesburg','BD':'Asia/Dhaka','NP':'Asia/Kathmandu','UA':'Europe/Kyiv','PL':'Europe/Warsaw',
 'NL':'Europe/Amsterdam','SG':'Asia/Singapore','IL':'Asia/Jerusalem','BE':'Europe/Brussels','PT':'Europe/Lisbon','IE':'Europe/Dublin'}
V2_FROM = datetime(2026, 9, 15, tzinfo=timezone.utc)

rows = list(csv.DictReader(open(sys.argv[1]), delimiter='\t', quoting=csv.QUOTE_NONE))
P = lambda s: datetime.fromisoformat(s[:26]).replace(tzinfo=timezone.utc) if s and s != 'NULL' else None
num = lambda x: int(x) if x not in ('', 'NULL') else None

lens = [num(r['len']) for r in rows if num(r['len'])]
by = collections.defaultdict(list)
for r in rows:
    if num(r['len']): by[r['sc']].append(num(r['len']))
length_by_country = sorted([[c, int(st.median(v)), len(v)] for c, v in by.items() if len(v) >= 20], key=lambda x: -x[1])

hours = collections.Counter(); dows = collections.Counter(); n_time = 0
for r in rows:
    if r['sc'] in SINGLE_TZ:
        t = P(r['created_at']).astimezone(ZoneInfo(SINGLE_TZ[r['sc']])); hours[t.hour] += 1; dows[t.isoweekday()] += 1; n_time += 1
band = lambda a, b: sum(hours[h % 24] for h in range(a, b))
pct = lambda x, n: round(x / n * 100)

dom, intl = [], []
for r in rows:
    a, b = P(r['created_at']), P(r['dt'])
    if a and b and r['rc'] and a >= V2_FROM:
        (dom if r['rc'] == r['sc'] else intl).append((b - a).total_seconds() / 3600)

rt = []
for r in rows:
    if r['rep'] == '1':
        a, b = P(r['created_at']), P(r['prev_dt'])
        if a and b and a > b: rt.append((a - b).total_seconds() / 3600)

def script(s):
    if re.search('[가-힣]', s): return 'ko'
    if re.search('[぀-ヿ一-鿿؀-ۿऀ-ॿЀ-ӿ฀-๿]', s): return 'other'
    return 'latin'
lat = collections.Counter(); ko = collections.Counter()
for r in rows:
    if r['rep'] != '0': continue
    s = script(r['head'])
    if s == 'latin':
        w = re.findall(r"[A-Za-z']+", r['head'].lower())
        if w: lat[w[0]] += 1
    elif s == 'ko':
        ko[re.split(r'[\s.,!~?:)]', r['head'].strip())[0]] += 1
nl, nk = sum(lat.values()), sum(ko.values())

out = {
  'letters': len(rows),
  'countries': len({r['sc'] for r in rows}),
  'period': {'from': min(r['created_at'] for r in rows)[:7], 'to': max(r['created_at'] for r in rows)[:7]},
  'length': {'median': int(st.median(lens)), 'p25': int(st.quantiles(lens, n=4)[0]), 'p75': int(st.quantiles(lens, n=4)[2]),
             'byCountry': length_by_country},
  'time': {'sample': n_time, 'night22to2': pct(band(22, 26), n_time), 'late2to6': pct(band(2, 6), n_time),
           'morning6to12': pct(band(6, 12), n_time), 'afternoon12to18': pct(band(12, 18), n_time), 'evening18to22': pct(band(18, 22), n_time),
           'peakHour': hours.most_common(1)[0][0],
           'weekday': [[d, pct(dows[d], n_time)] for d in range(1, 8)]},
  'delivery': {'domestic': {'n': len(dom), 'median': round(st.median(dom), 1), 'max': round(max(dom), 1)},
               'international': {'n': len(intl), 'median': round(st.median(intl), 1), 'min': round(min(intl), 1), 'max': round(max(intl), 1)}},
  'reply': {'n': len(rt), 'medianHours': round(st.median(rt), 1), 'within1h': pct(sum(x <= 1 for x in rt), len(rt)),
            'within24h': pct(sum(x <= 24 for x in rt), len(rt))},
  'openers': {'latin': {'n': nl, 'top': [[w, pct(c, nl)] for w, c in lat.most_common(5)], 'dear': pct(lat['dear'], nl)},
              'ko': {'n': nk, 'annyeonghaseyo': pct(ko['안녕하세요'], nk), 'annyeongAny': pct(sum(c for w, c in ko.items() if w.startswith('안녕')), nk)}},
}
print(json.dumps(out, ensure_ascii=False, indent=2))
