USE social;

ALTER TABLE posts
MODIFY COLUMN img VARCHAR(400);


INSERT INTO posts 
VALUES (6,"test6", "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600", 3, NULL);

SELECT * FROM posts;

  SELECT p.*, u.id AS userId, u.name, u.profilePic 
  FROM posts AS p JOIN users AS u 
  ON u.id = p.userId;
  
  
  SELECT * FROM users;
  
  