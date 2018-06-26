ALTER TABLE tbl AUTO_INCREMENT = 100001;
INSERT INTO users (firstName, lastName, email, skill) 
VALUES ('Ryan', 'Diaz', 'ryandiaz@gmail.com', 'JavaScript'), ('Jimmy', 'McKenzie', 'jimmy.j.mckenzie@gmail.com', 'HTML');
SELECT * FROM main.users;