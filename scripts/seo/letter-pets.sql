-- 고양이·강아지가 나오는 편지 수와 사진 동봉 편지 수 (블로그 cat-day-letter·handwriting). 운영 DB 읽기 전용, 숫자만 받는다.
--   bash q.sh < scripts/seo/letter-pets.sql
-- 기준은 letter-stats.sql 과 같다. 낱말로 센 것이라(여러 언어) 대략값이다. v2 = 2026-09-15 이후.
SELECT COUNT(*) n,
  SUM(LOWER(l.content) REGEXP '\\b(cat|cats|kitten|kittens|kitty|kedi|kediler|gato|gatos|gata|katze|katzen|gatto|kucing|meow)\\b' OR l.content REGEXP '고양이|냥이|猫|кошк|котик|mèo|แมว|बिल्ली') cat,
  SUM(LOWER(l.content) REGEXP '\\b(dog|dogs|puppy|puppies|doggy|köpek|perro|perros|hund|cane|anjing)\\b' OR l.content REGEXP '강아지|멍멍|犬|狗|собак|chó|หมา|สุนัข|कुत्ता') dog,
  SUM(l.image_url IS NOT NULL AND l.image_url<>'') photo,
  SUM(l.created_at >= '2026-09-15') v2,
  SUM(l.created_at >= '2026-09-15' AND l.image_url IS NOT NULL AND l.image_url<>'') v2photo
FROM letters l JOIN users s ON s.id=l.user_id
LEFT JOIN conversations c ON c.id=l.conversation_id
LEFT JOIN users r ON r.id = IF(l.user_id=c.user_id, c.partner_id, c.user_id)
WHERE l.is_deleted=0 AND IFNULL(s.is_ai_user,0)=0 AND s.email NOT LIKE 'ggprgrkjh%' AND s.id<>1118 AND IFNULL(s.is_test_account,0)=0
  AND s.country_code REGEXP '^[A-Z]{2}$'
  AND (r.id IS NULL OR (IFNULL(r.is_ai_user,0)=0 AND r.email NOT LIKE 'ggprgrkjh%' AND r.id<>1118));
