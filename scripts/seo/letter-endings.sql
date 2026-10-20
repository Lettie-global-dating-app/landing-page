-- 「편지를 어떻게 끝내나」 원자료 (블로그 how-to-end-a-letter-to-a-pen-pal). 운영 DB 읽기 전용.
--   bash q.sh < scripts/seo/letter-endings.sql > tails.tsv && python3 scripts/seo/letter-endings.py tails.tsv
-- 기준은 letter-stats.sql 과 같다(사람이 쓴 편지, AI·운영자·QA·테스트 계정·삭제 제외). 본문은 끝 80자만 — 끝인사 세기용, 공개하지 않는다.
SELECT l.id, s.country_code sc, l.is_reply+0 rep, l.is_public+0 pub, CHAR_LENGTH(l.content) len,
  REPLACE(REPLACE(REPLACE(RIGHT(TRIM(l.content),80),'\t',' '),'\r',''),'\n',' | ') tail
FROM letters l JOIN users s ON s.id=l.user_id
LEFT JOIN conversations c ON c.id=l.conversation_id
LEFT JOIN users r ON r.id = IF(l.user_id=c.user_id, c.partner_id, c.user_id)
WHERE l.is_deleted=0 AND IFNULL(s.is_ai_user,0)=0 AND s.email NOT LIKE 'ggprgrkjh%' AND s.id<>1118 AND IFNULL(s.is_test_account,0)=0
  AND s.country_code REGEXP '^[A-Z]{2}$'
  AND (r.id IS NULL OR (IFNULL(r.is_ai_user,0)=0 AND r.email NOT LIKE 'ggprgrkjh%' AND r.id<>1118))
ORDER BY l.id;
