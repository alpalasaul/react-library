create database library;

use library;

create table books (
	id int auto_increment not null,
	autor varchar(100) not null,
	titulo varchar(100) not null,
	edicion int,
	primary key(id)
);

select * from books;

insert into books (titulo, autor, edicion) values ("La Hiliada", "Homero", 1);

-- Permisos para que node pueda acceder

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'admin';

flush privileges;

