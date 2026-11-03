#!/usr/bin/env python3
"""letter-langs.sql 의 TSV → letterStats.ts 의 LETTER_LANGS (2026-11-04).
편지 앞 100자로 쓴 말을 **대략** 가린다: 라틴 문자가 아니면 문자 체계로(한글·가나·한자·키릴·아랍·데바나가리·타이 …),
라틴 문자면 언어별 기능어 수로(영어·스페인어·포르투갈어·프랑스어·독일어·이탈리아어·인도네시아어·튀르키예어·베트남어).
애매하면 '그 밖의 라틴 문자'. 본문은 출력하지 않는다. 답장률 같은 대화 지표는 내지 않는다(대표 결정).
   python3 scripts/seo/letter-langs.py langs.tsv [--debug]"""
import csv, json, re, sys, collections
csv.field_size_limit(10**7)
rows = list(csv.DictReader(open(sys.argv[1], encoding='utf-8'), delimiter='\t', quoting=csv.QUOTE_NONE))

SCRIPTS = [  # (라벨, 정규식) — 먼저 맞는 것. 가나가 있으면 한자가 섞여도 일본어.
    ('ko', r'[가-힣]'), ('ja', r'[぀-ヿ]'), ('zh', r'[一-鿿]'), ('cyr', r'[Ѐ-ӿ]'),
    ('arab', r'[؀-ۿ]'), ('deva', r'[ऀ-ॿ]'), ('th', r'[฀-๿]'), ('bn', r'[ঀ-৿]'),
    ('el', r'[Ͱ-Ͽ]'), ('he', r'[֐-׿]'), ('ta', r'[஀-௿]'), ('my', r'[က-႟]'),
    ('km', r'[ក-៿]'), ('ka', r'[Ⴀ-ჿ]'), ('am', r'[ሀ-፿]'), ('si', r'[඀-෿]'),
]
STOP = {
    'en': 'the and you i my is are to of hello hi hey how what it in me your have from this am dear im i\'m was can do so for with that just really love like not but we they she he be will very good nice thanks thank yeah yes oh haha lol where why when there here all about know think also too today friend friends iam',
    'es': 'el la los las que y en hola soy mi es un una por para con como tu me muy pero también estoy gracias tienes cuál oye claro gustos',
    'pt': 'o os que e não nao eu você voce olá ola oi meu minha sou um uma com para tudo bem muito também estou vc tbm obrigada obrigado',
    'fr': 'le les et je tu vous bonjour salut suis est une mon ma pas que avec pour très tres aussi c’est c\'est on ton',
    'de': 'der die das und ich du bin ist nicht hallo mein meine ein eine wie mit auch sehr ja gerne dass danke sie schön',
    'it': 'il di che io sono ciao mi una non per come anche molto sei stai ti piace ho questo',
    'id': 'aku saya kamu yang dan di ini itu halo apa ada tidak dengan untuk juga dari kita mari berteman karena suka',
    'tr': 'ben sen bir ve bu merhaba nasılsın çok ne için benim seni',
}
STOP = {k: set(v.split()) for k, v in STOP.items()}
VI = re.compile(r'[ạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹđơưĐƠƯ]')
TR = re.compile(r'[ğışĞİŞ]')  # re.I 금지 — 유니코드 대소문자 접기로 ı 가 모든 i 에 맞는다

def lang(t):
    for lab, rx in SCRIPTS:
        if len(re.findall(rx, t)) >= 3: return lab
    if len(VI.findall(t)) >= 3: return 'vi'
    words = re.findall(r"[a-zà-ÿğışçöü']+", t.lower())
    sc = {k: sum(w in s for w in words) for k, s in STOP.items()}
    if TR.search(t): sc['tr'] += 2
    best = sorted(sc.items(), key=lambda x: -x[1])
    (a, x), (_, y) = best[0], best[1]
    if x >= 2 and x >= 1.5 * y + 0.5: return a
    if a == 'en' and x >= 1 and y == 0: return 'en'
    return 'latin?' if words else 'other'

# 나라 → 그 나라 사람이 흔히 쓰는 말(판별 라벨 기준). 영어가 공용어인 나라는 ENG_OFFICIAL 로 따로.
OWN = {'KR': 'ko', 'KP': 'ko', 'JP': 'ja', 'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh', 'SG': 'zh', 'TR': 'tr', 'RU': 'cyr', 'UA': 'cyr',
       'BY': 'cyr', 'KZ': 'cyr', 'KG': 'cyr', 'UZ': 'cyr', 'MN': 'cyr', 'BG': 'cyr', 'RS': 'cyr', 'MK': 'cyr', 'BR': 'pt', 'PT': 'pt', 'AO': 'pt',
       'MZ': 'pt', 'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es', 'VE': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es',
       'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es', 'FR': 'fr', 'BE': 'fr',
       'SN': 'fr', 'CI': 'fr', 'CM': 'fr', 'DE': 'de', 'AT': 'de', 'CH': 'de', 'IT': 'it', 'ID': 'id', 'MY': 'id', 'VN': 'vi', 'TH': 'th',
       'EG': 'arab', 'SA': 'arab', 'AE': 'arab', 'MA': 'arab', 'DZ': 'arab', 'TN': 'arab', 'IQ': 'arab', 'JO': 'arab', 'SY': 'arab',
       'LB': 'arab', 'YE': 'arab', 'KW': 'arab', 'QA': 'arab', 'OM': 'arab', 'BH': 'arab', 'LY': 'arab', 'SD': 'arab', 'PS': 'arab',
       'IR': 'arab', 'AF': 'arab', 'PK': 'arab', 'IN': 'deva', 'NP': 'deva', 'BD': 'bn', 'GR': 'el', 'CY': 'el', 'IL': 'he', 'MM': 'my',
       'KH': 'km', 'GE': 'ka', 'ET': 'am', 'LK': 'si'}
ENG_NATIVE = set('US GB AU CA NZ IE'.split())
ENG_OFFICIAL = set('IN NG UG KE GH PH SG PK ZA ZW ZM TZ RW MW LR SL BW NA FJ JM TT MT CM SS GM LS SZ BZ GY BS BB HK'.split())
english_ok = lambda c: c in ENG_NATIVE or c in ENG_OFFICIAL

NAMES = {'en': 'English', 'ko': 'Korean', 'ja': 'Japanese', 'zh': 'Chinese', 'cyr': 'Cyrillic (Russian etc.)', 'arab': 'Arabic script',
         'deva': 'Devanagari (Hindi etc.)', 'th': 'Thai', 'es': 'Spanish', 'pt': 'Portuguese', 'fr': 'French', 'de': 'German', 'it': 'Italian',
         'id': 'Indonesian/Malay', 'tr': 'Turkish', 'vi': 'Vietnamese', 'latin?': 'other Latin-script', 'other': 'other'}

for r in rows: r['L'] = lang(r['head'])
if '--debug' in sys.argv:
    for r in rows[:: max(1, len(rows) // 60)]: print(r['L'], r['sc'], r['head'][:70])
    sys.exit()
n = len(rows)
share = collections.Counter(r['L'] for r in rows)
pct = lambda a, b: round(100 * a / b) if b else 0
top = [{'lang': k, 'name': NAMES.get(k, k), 'n': v, 'pct': pct(v, n)} for k, v in share.most_common(12)]

# 나라가 다른 두 사람 사이의 대화 편지
cross = [r for r in rows if r['rc'] and r['rc'] != r['sc']]
def split(rs):
    c = collections.Counter(); people = len({r['uid'] for r in rs})
    for r in rs:
        own, rec = OWN.get(r['sc']), OWN.get(r['rc'])
        if r['L'] == 'en': c['english'] += 1
        elif own and r['L'] == own: c['own'] += 1
        elif rec and r['L'] == rec: c['theirs'] += 1
        else: c['other'] += 1
    t = sum(c.values())
    # 몇 사람이 많이 쓴 탓인지 보려고 사람 기준도 낸다: 그 사람이 이 묶음에서 가장 많이 쓴 방식 하나로 센다.
    per = collections.defaultdict(collections.Counter)
    for r in rs:
        own, rec = OWN.get(r['sc']), OWN.get(r['rc'])
        per[r['uid']]['english' if r['L'] == 'en' else 'own' if own and r['L'] == own else 'theirs' if rec and r['L'] == rec else 'other'] += 1
    pc = collections.Counter(v.most_common(1)[0][0] for v in per.values())
    return {'n': t, 'people': people, **{k: pct(c[k], t) for k in ('english', 'own', 'theirs', 'other')},
            'byPerson': {k: pct(pc[k], len(per)) for k in ('english', 'own', 'theirs', 'other')}}
noeng = [r for r in cross if not english_ok(r['sc']) and not english_ok(r['rc'])]
# 보낸 사람 나라가 영어권이 아닌 경우, 받는 사람도 같은 말을 쓰는 나라(OWN 같음)면 제외해 「다른 말을 쓰는 두 사람」만
noeng_difflang = [r for r in noeng if OWN.get(r['sc']) and OWN.get(r['sc']) != OWN.get(r['rc'])]
same_lang_pairs = [r for r in cross if OWN.get(r['sc']) and OWN.get(r['sc']) == OWN.get(r['rc'])]
# 영어권 아닌 나라 사람이 영어 원어민 나라 사람에게
to_native = [r for r in cross if not english_ok(r['sc']) and r['rc'] in ENG_NATIVE]
# 나라별(보낸 사람 30통↑, 영어권 아님): 영어로 쓴 비율
byc = collections.defaultdict(list)
for r in cross:
    if not english_ok(r['sc']): byc[r['sc']].append(r)
bycountry = sorted([{'cc': c, 'n': len(v), 'english': pct(sum(x['L'] == 'en' for x in v), len(v)), 'own': pct(sum(x['L'] == OWN.get(c) for x in v), len(v)),
                     'senders': len({x['uid'] for x in v})} for c, v in byc.items() if len(v) >= 30 and len({x['uid'] for x in v}) >= 5], key=lambda d: -d['n'])
pub = [r for r in rows if r['pub'] == '1' and not r['rc']]
out = {'n': n, 'people': len({r['uid'] for r in rows}), 'countries': len({r['sc'] for r in rows}), 'top': top, 'cross': split(cross), 'noEnglishPairs': split(noeng_difflang), 'toNativeEnglish': split(to_native),
       'publicEnglish': {'n': len(pub), 'pct': pct(sum(r['L'] == 'en' for r in pub), len(pub))},
       'publicNonEnglishCountries': (lambda rs: {'n': len(rs), 'people': len({r['uid'] for r in rs}), 'english': pct(sum(r['L'] == 'en' for r in rs), len(rs))})([r for r in pub if not english_ok(r['sc'])]),
       'byCountry': bycountry[:10], 'unsure': pct(share['latin?'] + share['other'], n)}
print(json.dumps(out, ensure_ascii=False, indent=1))
