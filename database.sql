CREATE DATABASE Examen;

USE Examen;

CREATE TABLE c_banco(
    ID SMALLINT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Clave VARCHAR(50),
    Nombre_Corto VARCHAR(50),
    Banco TEXT,
    ID_Status TINYINT(4),
    Orden SMALLINT(6)
);

CREATE TABLE c_cuentas_bancarias(
    ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ALIAS VARCHAR(50),
    ID_Banco SMALLINT(6),
    Ultimos_Digitos VARCHAR(10)
);

INSERT INTO `c_banco` (`ID`, `Clave`, `Nombre_Corto`, `Banco`, `ID_Status`, `Orden`) VALUES
(1, '123456789', 'BBVA', 'Bancomer', 1, 1),
(3, '987654321', 'Banamex', 'Banamex', 1, 2);

INSERT INTO `c_cuentas_bancarias` (`ID`, `ALIAS`, `ID_Banco`, `Ultimos_Digitos`) VALUES
(1, 'Premium', 1, '9999'),
(2, 'Estudiante', 3, '2345'),
(3, 'Nomina', 1, '8723'),
(4, 'Empleado', 3, '1212');