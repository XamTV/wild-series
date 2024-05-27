create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table category (
  id int unsigned primary key auto_increment not null,
  name varchar(80) not null
);
create table program (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  synopsis TEXT NOT NULL,
  poster VARCHAR(255) NOT NULL,
  country VARCHAR(80) NOT NULL,
  year INT NOT NULL,
  category_id int unsigned not null,
  foreign key (category_id) references program(id)
);
