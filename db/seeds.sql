/* This is for creating the users table */
ALTER TABLE users AUTO_INCREMENT = 100001;
ALTER TABLE users CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
INSERT INTO users (firstName, lastName, email, skill) 
VALUES ('Ryan', 'Diaz', 'ryandiaz@gmail.com', 'JavaScript'), ('Jimmy', 'McKenzie', 'jimmy.j.mckenzie@gmail.com', 'HTML');
SELECT * FROM main.users;

/* This is for creating the recruiterAgencies table */
ALTER TABLE recruiterAgencies AUTO_INCREMENT = 1001;
ALTER TABLE recruiterAgencies CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE recruiterAgencies CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
INSERT INTO recruiterAgencies (prefix, recruiting_agency, street_address1, unit1, city1, state1, zip_code1, number1, national, description, email, website) 
VALUES ('R', 'Recruit Hound Test', '1 Recruit Central', 'A', 'Charlotte', 'NC', '28202', '5706603623', '1', 'This is the centralized hot spot that brings you the technologist to all Recruiters in a given geographic area. Sign up today and make finding jobs 10x easier!', 'chad.pilker@gmail.com', 'recruithound.io'), ('R', 'Teksystems', '200 South College Street', 'Suite 1900', 'Charlotte', 'NC', '28202', '8885190776', '1', 'TEKsystems is an Allegis Group company, the largest private talent management firm in the world. Our longstanding history and industry-leading position speak to our success in providing IT staffing solutions and IT services that empower organizations to actualize ROI and sustain a truly competitive advantage in a fast-changing market.', null, 'https://www.teksystems.com/');
SELECT * FROM main.recruiterAgencies;

/* This is for modifying the recruiter_contact table */
ALTER TABLE recruiterAgencies CHANGE COLUMN `createdAt` `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE recruiterAgencies CHANGE COLUMN `updatedAt` `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
SELECT * FROM main.recruiter_contact;