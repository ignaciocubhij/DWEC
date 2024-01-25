
CREATE DATABASE `lista_alumnos`;
USE `lista_alumnos`;

CREATE TABLE IF NOT EXISTS `alumnos` (
  `id` int(11) NOT NULL auto_increment,
  `nombre` varchar(100) collate utf8_unicode_ci NOT NULL,
  `apellidos` varchar(160) collate utf8_unicode_ci NOT NULL,
  `email` varchar(129) collate utf8_unicode_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;



