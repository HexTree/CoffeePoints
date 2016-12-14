/*
This file creates the databse. It has to be run exactly once or all data would
be deleted by the drop table commands.
*/

drop table if exists scan;
drop table if exists member;
drop table if exists bottle;
drop table if exists bag;
drop table if exists mug;

create table member(
  token text primary key,
  name text not null,
  points int,
  created date
);

create table bottle(
  id int primary key,
  created timestamp with time zone,
  location text
);

create table bag(
  id int primary key,
  created timestamp with time zone,
  location text
);

create table mug(
  id int primary key,
  created timestamp with time zone,
  location text
);

create table scan(
  token text primary key references member(token),
  id int,
  type text
);
