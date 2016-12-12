/*
This file creates the databse. It has to be run exactly once or all data would
be deleted by the drop table commands.
*/

drop table if exists users;
drop table if exists bottles;
drop table if exists bags;
drop table if exists mugs;
drop table if exists stat;
