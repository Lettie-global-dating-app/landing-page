#!/usr/bin/env python3
"""letter-endings.sql 의 TSV → src/data/letterStats.ts 의 LETTER_ENDINGS 숫자. 정의를 여기 고정한다.

- 대상: 40자 이상 편지. 영어 편지(끝 80자에 흔한 영어 낱말 3개 이상·한글·가나·한자·튀르키예어/스페인어 등의 악센트 글자 없음)와 한글 편지를 따로 센다.
- 끝 80자 안에 아래 표현이 있으면 그 갈래로 센다(한 편지가 여러 갈래에 들 수 있다).
- 이름 서명: 마지막 줄이 대문자로 시작하는 한두 낱말뿐.
- 끝인사 없음: 어느 갈래에도, 이름 서명에도 안 든 편지.
"""
import csv, json, re, sys, collections

rows = list(csv.DictReader(open(sys.argv[1]), delimiter='\t', quoting=csv.QUOTE_NONE))
rows = [r for r in rows if r['len'].isdigit() and int(r['len']) >= 40]
HAN = re.compile(r'[가-힣]'); CJK = re.compile(r'[぀-ヿ一-鿿]')
LATIN = {
    'question': r'\?\s*[\W_]*$',
    'lookingForward': r'looking forward|hear from you|hearing from you|your reply|write back|reply soon|hope to hear|wait(ing)? for your|next letter|(talk|write|see you|speak) soon',
    'takeCare': r'take care|stay safe|stay warm|stay well',
    'niceDay': r'(have|wish you) a (nice|great|good|lovely|wonderful|beautiful|blessed) (day|week|weekend|night|evening|time)|good night|sweet dreams',
    'regards': r'best wishes|regards|warmly|warm wishes|sincerely|yours truly|cheers',
    'thanks': r'thank',
}
KO = {
    'question': r'[?？]\s*[\W_]*$',
    'niceDay': r'좋은 하루|좋은 밤|좋은 주말|행복한 하루|즐거운 하루|편안한 밤|굿밤|잘 자',
    'askReply': r'답장|연락|기다릴|기다려',
    'thanks': r'감사|고마워|고맙',
}
NAME = re.compile(r'[-–—~,\s]*[A-Z][a-zA-Z]{1,15}( [A-Z][a-zA-Z]{1,15})?[.!~\s]*')

def tally(rs, pats):
    c = collections.Counter()
    for r in rs:
        t = r['tail'].lower(); hit = False
        for k, p in pats.items():
            if re.search(p, t): c[k] += 1; hit = True
        parts = [x.strip() for x in r['tail'].split('|') if x.strip()]
        if parts and NAME.fullmatch(parts[-1]): c['nameSign'] += 1; hit = True
        if not hit: c['none'] += 1
    n = len(rs)
    return {'n': n, **{k: round(c[k] / n * 100) for k in [*pats, 'nameSign', 'none']}}

EN_WORDS = re.compile(r"\b(the|you|and|to|i|my|your|is|it|have|of|in|a|for|me|we|hope|with)\b")
ACCENT = re.compile(r'[ğşıİçöüñáéíóúãõàèìòùâêîôûäëïÿßøåæÇÖÜÑÁÉÍÓÚ]')
lat = [r for r in rows if len(EN_WORDS.findall(r['tail'].lower())) >= 3 and not ACCENT.search(r['tail'])
       and not HAN.search(r['tail']) and not CJK.search(r['tail'])]
ko = [r for r in rows if HAN.search(r['tail'])]
print(json.dumps({'en': tally(lat, LATIN), 'ko': tally(ko, KO)}, ensure_ascii=False))
