-- /letter-stats (편지 통계) 원자료. 운영 DB 에서 읽기 전용으로 돌려 TSV 로 받고, letter-stats.py 가 집계한다.
--   ssh … 'bash /tmp/lq.sh' < scripts/seo/letter-stats.sql > letters.tsv && python3 scripts/seo/letter-stats.py letters.tsv
-- 기준: 사람이 쓴 편지(대화 편지 + 공개로 띄운 편지). AI 계정·운영자(ggprgrkjh%)·QA(1118)·테스트 계정·삭제된 편지·
--       두 글자 ISO 가 아닌 나라 코드 제외, 받는 쪽이 AI·운영자인 대화 편지도 제외. 본문은 앞 60자만 — 첫 인사말 세기용, 공개하지 않는다.
SELECT l.id, s.country_code sc,
  IFNULL(r.country_code,'') rc, l.created_at, IFNULL(l.delivery_time,'') dt, l.is_reply+0 rep, l.is_public+0 pub,
  IFNULL(l.conversation_id,'') cid, CHAR_LENGTH(l.content) len,
  REPLACE(REPLACE(REPLACE(LEFT(l.content,60),'\t',' '),'\n',' '),'\r',' ') head,
  (SELECT p.delivery_time FROM letters p WHERE p.conversation_id=l.conversation_id AND p.id<l.id AND p.user_id<>l.user_id AND p.is_deleted=0 ORDER BY p.id DESC LIMIT 1) prev_dt
FROM letters l JOIN users s ON s.id=l.user_id
LEFT JOIN conversations c ON c.id=l.conversation_id
LEFT JOIN users r ON r.id = IF(l.user_id=c.user_id, c.partner_id, c.user_id)
WHERE l.is_deleted=0 AND IFNULL(s.is_ai_user,0)=0 AND s.email NOT LIKE 'ggprgrkjh%' AND s.id<>1118 AND IFNULL(s.is_test_account,0)=0
  AND s.country_code REGEXP '^[A-Z]{2}$'
  AND (r.id IS NULL OR (IFNULL(r.is_ai_user,0)=0 AND r.email NOT LIKE 'ggprgrkjh%' AND r.id<>1118))
ORDER BY l.id;
