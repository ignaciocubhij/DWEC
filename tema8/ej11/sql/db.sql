create database notas;
use notas;
create table notas(
    id_nota int primary key auto_increment not null,
    titulo varchar(20) not null,
    descripcion varchar(255)
)