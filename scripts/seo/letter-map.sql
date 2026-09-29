-- /letter-map · COMMUNITY 집계 (src/data/letterMap.ts). 운영 DB 에서 읽기 전용으로 돌린다.
--   scp 로 서버에 올려 docker exec dearglobe-mysql mysql ... dearglobe < letter-map.sql
-- 2026-09-30 에 9/24 값(208통·35개국)을 같은 정의로 재현해 검증했다(조회 시각 차이로 1통 차).
-- 기준: 대화 안의 사람→사람 편지. 양쪽 AI 계정·운영자(ggprgrkjh%)·QA(1118)·삭제된 편지·두 글자 ISO 가 아닌 나라 코드 제외.
-- 나라 수 = 보낸 쪽 ∪ 받는 쪽, 나라별 = 그 나라가 낀 편지 수, 경로 = 방향 없이.
SET @cut = UTC_TIMESTAMP();
-- (MySQL 은 임시 테이블을 한 쿼리에서 두 번 못 연다 → 쿼리마다 CTE)
WITH f AS (
  SELECT l.id, s.country_code sc, r.country_code rc
  FROM letters l JOIN conversations c ON c.id = l.conversation_id
  JOIN users s ON s.id = l.user_id
  JOIN users r ON r.id = IF(l.user_id = c.user_id, c.partner_id, c.user_id)
  WHERE l.is_deleted = 0 AND IFNULL(s.is_ai_user, 0) = 0 AND IFNULL(r.is_ai_user, 0) = 0
    AND s.email NOT LIKE 'ggprgrkjh%' AND r.email NOT LIKE 'ggprgrkjh%' AND s.id <> 1118 AND r.id <> 1118
    AND s.country_code REGEXP '^[A-Z]{2}$' AND r.country_code REGEXP '^[A-Z]{2}$' AND l.created_at < @cut)
SELECT 'total' w, COUNT(*) letters, SUM(sc <> rc) international, SUM(sc = rc) domestic,
       (SELECT COUNT(DISTINCT x) FROM (SELECT sc x FROM f UNION SELECT rc FROM f) t) countries FROM f;
WITH f AS (
  SELECT l.id, s.country_code sc, r.country_code rc
  FROM letters l JOIN conversations c ON c.id = l.conversation_id
  JOIN users s ON s.id = l.user_id
  JOIN users r ON r.id = IF(l.user_id = c.user_id, c.partner_id, c.user_id)
  WHERE l.is_deleted = 0 AND IFNULL(s.is_ai_user, 0) = 0 AND IFNULL(r.is_ai_user, 0) = 0
    AND s.email NOT LIKE 'ggprgrkjh%' AND r.email NOT LIKE 'ggprgrkjh%' AND s.id <> 1118 AND r.id <> 1118
    AND s.country_code REGEXP '^[A-Z]{2}$' AND r.country_code REGEXP '^[A-Z]{2}$' AND l.created_at < @cut)
SELECT 'flow' w, sc, rc, COUNT(*) n FROM f GROUP BY sc, rc ORDER BY n DESC;   -- flows.tsv (지도·경로·나라별·국내는 여기서 계산)
SELECT 'community' w, COUNT(*) users, COUNT(DISTINCT CASE WHEN country_code REGEXP '^[A-Z]{2}$' THEN country_code END) countries
FROM users WHERE is_deleted = 0 AND IFNULL(is_ai_user, 0) = 0 AND created_at < @cut;
