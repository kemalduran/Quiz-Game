CREATE SCHEMA `quiz` DEFAULT CHARACTER SET utf8 COLLATE utf8_turkish_ci ;

CREATE TABLE `quiz`.`question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` INT NULL,
  `type` INT NULL,
  `difficulty` INT NULL,
  `question_text` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE `quiz`.`answer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `is_correct` INT NULL,
  `answer_text` VARCHAR(100) NULL,
  `question_id` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE `quiz`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(200) NULL,
  `username` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;



INSERT INTO `quiz`.`user` (`id`,`email`,`password`,`username`) VALUES (1,'kemal@qmail.com','12345k','kemal.duran');
INSERT INTO `quiz`.`user` (`id`,`email`,`password`,`username`) VALUES (2,'cengiz@qmail.com','12345c','cengiz.ceng');
INSERT INTO `quiz`.`user` (`id`,`email`,`password`,`username`) VALUES (3,'cafer@qmail.com','12345c','cafer');
INSERT INTO `quiz`.`user` (`id`,`email`,`password`,`username`) VALUES (4,'mustafa@qmail.com','12345m','mustafa');

INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (1,1,1,1,'Which sign of the zodiac is represented by the Crab?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (2,1,1,1,'What is the shape of the toy invented by Hungarian professor Ernő Rubik?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (3,1,1,1,'How many colors are there in a rainbow?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (4,1,1,1,'Five dollars is worth how many nickles?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (5,1,1,1,'Which of the following presidents is not on Mount Rushmore?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (6,1,1,1,'What is Tasmania?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (7,1,1,1,'What zodiac sign is represented by a pair of scales?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (8,1,1,1,'What nuts are used in the production of marzipan?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (9,1,1,1,'According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?');
INSERT INTO `quiz`.`question` (`id`,`category`,`type`,`difficulty`,`question_text`) VALUES (10,1,1,1,'If you are caught, what are you doing wrong?');


INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (1,1,'Cancer',1);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (2,0,'Libra',1);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (3,0,'Virgo',1);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (4,0,'Sagittarius',1);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (5,1,'Cube',2);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (6,0,'Sphere',2);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (7,0,'Cylinder',2);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (8,0,'Pyramid',2);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (9,1,'7',3);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (10,0,'8',3);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (11,0,'9',3);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (12,0,'10',3);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (13,1,'100',4);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (14,0,'50',4);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (15,0,'25',4);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (16,0,'69',4);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (17,1,'John F. Kennedy',5);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (18,0,'Theodore Roosevelt',5);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (19,0,'Abraham Lincoln',5);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (20,0,'Thomas Jefferson',5);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (21,1,'An Australian State',6);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (22,0,'A flavor of Ben and Jerry&#039;s ice-cream',6);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (23,0,'A Psychological Disorder',6);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (24,0,'The Name of a Warner Brothers Cartoon Character',6);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (25,1,'Libra',7);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (26,0,'Aries',7);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (27,0,'Capricorn',7);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (28,0,'Sagittarius',7);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (29,1,'Almonds',8);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (30,0,'Peanuts',8);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (31,0,'Walnuts',8);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (32,0,'Pistachios',8);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (33,1,'Plum',9);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (34,0,'Apple',9);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (35,0,'Peach',9);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (36,0,'Pear',9);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (37,1,'Slacking',10);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (38,0,'Smoking',10);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (39,0,'Stealing',10);
INSERT INTO `quiz`.`answer` (`id`,`is_correct`,`answer_text`,`question_id`) VALUES (40,0,'Cheating',10);

