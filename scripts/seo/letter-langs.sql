-- 편지를 어떤 말로 썼나 (블로그 「펜팔, 영어 못해도 될까」 2026-11-06). 대상은 letter-stats.sql 과 같다.
--   ssh … 'bash /tmp/lq.sh' < scripts/seo/letter-langs.sql > langs.tsv && python3 scripts/seo/letter-langs.py langs.tsv
-- 본문은 앞 100자만 언어 판별용으로 받고 공개하지 않는다(TSV 는 판별 뒤 지운다). 받는 사람 나라는 대화 편지만.
SELECT l.id, l.user_id uid, s.country_code sc, IFNULL(r.country_code,'') rc, l.is_reply+0 rep, l.is_public+0 pub,
  REPLACE(REPLACE(REPLACE(LEFT(l.content,100),'\t',' '),'\n',' '),'\r',' ') head
FROM letters l JOIN users s ON s.id=l.user_id
LEFT JOIN conversations c ON c.id=l.conversation_id
LEFT JOIN users r ON r.id = IF(l.user_id=c.user_id, c.partner_id, c.user_id)
WHERE l.is_deleted=0 AND IFNULL(s.is_ai_user,0)=0 AND s.email NOT LIKE 'ggprgrkjh%' AND s.id NOT IN (1118,230) AND IFNULL(s.is_test_account,0)=0
  AND s.country_code REGEXP '^[A-Z]{2}$'
  AND (r.id IS NULL OR (IFNULL(r.is_ai_user,0)=0 AND r.email NOT LIKE 'ggprgrkjh%' AND r.id NOT IN (1118,230) AND IFNULL(r.is_test_account,0)=0))
  AND CHAR_LENGTH(TRIM(l.content)) > 0
ORDER BY l.id;
