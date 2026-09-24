#!/usr/bin/env python3
"""사이트맵의 모든 URL 을 크롤러 눈(JS 없음)으로 훑는다.
    python3 scripts/seo/audit.py [base] > report.tsv
열: url code title_len desc_len h1 canonical_ok ld_ok ld_types title desc
"""
import sys, re, json, html, concurrent.futures as cf, urllib.request
BASE = sys.argv[1] if len(sys.argv) > 1 else 'https://lettie-dating.com'
UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
def get(u):
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': UA}), timeout=30)
        return r.status, r.read().decode('utf-8', 'replace')
    except urllib.error.HTTPError as e: return e.code, ''
    except Exception as e: return 0, str(e)
sm = get(BASE + '/sitemap.xml')[1]
urls = [u.replace('https://lettie-dating.com', BASE) for u in re.findall(r'<loc>([^<]+)</loc>', sm)]
def one(u):
    code, h = get(u)
    t = html.unescape((re.search(r'<title>([^<]*)</title>', h) or [None, ''])[1])
    d = html.unescape((re.search(r'<meta name="description" content="([^"]*)"', h) or [None, ''])[1])
    h1 = len(re.findall(r'<h1[\s>]', h))
    can = (re.search(r'rel="canonical" href="([^"]+)"', h) or [None, ''])[1]
    lds, ok = [], True
    for m in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
        try:
            j = json.loads(m)
            for it in (j.get('@graph', [j]) if isinstance(j, dict) else j): lds.append(it.get('@type', '?') if isinstance(it, dict) else '?')
        except Exception: ok = False
    return [u, code, len(t), len(d), h1, 'ok' if can.rstrip('/') == u.replace(BASE, 'https://lettie-dating.com').rstrip('/') else f'MISMATCH:{can}', 'ok' if ok else 'PARSE_ERR', ','.join(map(str, lds)), t, d]
with cf.ThreadPoolExecutor(8) as ex: rows = list(ex.map(one, urls))
print('\t'.join(['url', 'code', 'tlen', 'dlen', 'h1', 'canon', 'ld', 'ld_types', 'title', 'desc']))
for r in rows: print('\t'.join(map(str, r)))
