DROP TABLE IF EXISTS member;

CREATE TABLE member (
  id serial PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  url_avatar VARCHAR (255),
  email VARCHAR (50) NOT NULL,
  password VARCHAR (255) NOT NULL
);

