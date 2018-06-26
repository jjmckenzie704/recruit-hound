ALTER TABLE users AUTO_INCREMENT = 100001;
ALTER TABLE users CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
INSERT INTO users (firstName, lastName, email, skill) 
VALUES ('Ryan', 'Diaz', 'ryandiaz@gmail.com', 'JavaScript'), ('Jimmy', 'McKenzie', 'jimmy.j.mckenzie@gmail.com', 'HTML');
SELECT * FROM main.users;