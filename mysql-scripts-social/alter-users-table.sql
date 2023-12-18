ALTER TABLE users
MODIFY COLUMN coverPic VARCHAR(400);

ALTER TABLE users
MODIFY COLUMN profilePic VARCHAR(400);

SELECT * FROM users;

UPDATE users
SET coverPic ="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", profilePic = "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
WHERE id = 3;