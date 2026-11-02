#!/usr/bin/env python3
"""letter-words-en.sql 의 TSV → letterStats.ts 의 wordsEn. first = 답장이 아닌 편지(공개로 띄운 편지·대화를 여는 편지), reply = 답장."""
import csv, json, sys, statistics as st
rows = list(csv.DictReader(open(sys.argv[1]), delimiter='\t'))
def agg(ws, full=False):
    ws = sorted(ws); q = st.quantiles(ws, n=4)
    d = {'n': len(ws), 'median': round(st.median(ws))}
    if full: d.update(p25=round(q[0]), p75=round(q[2]))
    else: d['over150'] = round(100 * sum(w >= 150 for w in ws) / len(ws))
    return d
w = lambda f: [int(r['words']) for r in rows if f(r)]
print(json.dumps({'first': agg(w(lambda r: r['rep'] == '0')), 'reply': agg(w(lambda r: r['rep'] == '1')), 'all': agg(w(lambda r: True), True)}))
