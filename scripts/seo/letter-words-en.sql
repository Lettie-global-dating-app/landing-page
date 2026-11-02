-- 영어로 쓴 편지의 단어 수 (/letter-stats 「영어 편지는 몇 단어」). 대상은 letter-stats.sql 과 같다. 본문은 내보내지 않고 숫자만.
--   ssh … 'bash /tmp/lq.sh' < scripts/seo/letter-words-en.sql > words.tsv && python3 scripts/seo/letter-words-en.py words.tsv
-- 영어 판별(대략값): 바이트 수가 글자 수의 1.05배 이하(거의 ASCII)이고 영어 기능어(the·and·you·my·is·are·I)가 하나 이상.
-- 단어 = 공백 덩어리로 나눈 조각 수.
SELECT l.is_reply+0 rep,
  CHAR_LENGTH(l.content) len,
  CHAR_LENGTH(REGEXP_REPLACE(TRIM(l.content), '[[:space:]]+', ' ')) - CHAR_LENGTH(REPLACE(REGEXP_REPLACE(TRIM(l.content), '[[:space:]]+', ' '), ' ', '')) + 1 words
FROM letters l JOIN users s ON s.id=l.user_id
LEFT JOIN conversations c ON c.id=l.conversation_id
LEFT JOIN users r ON r.id = IF(l.user_id=c.user_id, c.partner_id, c.user_id)
WHERE l.is_deleted=0 AND IFNULL(s.is_ai_user,0)=0 AND s.email NOT LIKE 'ggprgrkjh%' AND s.id NOT IN (1118,230) AND IFNULL(s.is_test_account,0)=0
  AND s.country_code REGEXP '^[A-Z]{2}$'
  AND (r.id IS NULL OR (IFNULL(r.is_ai_user,0)=0 AND r.email NOT LIKE 'ggprgrkjh%' AND r.id NOT IN (1118,230) AND IFNULL(r.is_test_account,0)=0))
  AND CHAR_LENGTH(TRIM(l.content)) > 0
  AND LENGTH(l.content) <= CHAR_LENGTH(l.content) * 1.05
  AND REGEXP_LIKE(l.content, '\\b(the|and|you|my|is|are|i)\\b', 'i');
