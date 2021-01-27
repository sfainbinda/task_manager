CREATE database manager;
USE manager;

CREATE TABLE tasks (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR (120) NOT NULL,
    description VARCHAR (255) NOT NULL,
    finished BIT (1) NOT NULL,
    important BIT (1) NOT NULL,
    deleted BIT (1) NOT NULL,
    active BIT (1) NOT NULL
);

CREATE TABLE meetings (
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR (120) NOT NULL,
    description VARCHAR (255) NOT NULL,
    place VARCHAR (120) NOT NULL,
    date VARCHAR (30) NOT NULL,
    start VARCHAR (30) NOT NULL,
    end VARCHAR (30) NOT NULL,
    finished BIT (1) NOT NULL,
    deleted BIT (1) NOT NULL,
    active BIT (1) NOT NULL
);

-- Insert tasks

INSERT INTO tasks (title, description, finished, important, deleted, active) VALUES ('Demo Vuejs - Git', 'Cargar el proyecto competo en un repositorio.', 0, 1, 0, 1);
INSERT INTO tasks (title, description, finished, important, deleted, active) VALUES ('Demo Vuejs','Presentar la demo a Mariano', 0, 1, 0, 1);
INSERT INTO tasks (title, description, finished, important, deleted, active) VALUES ('Mejorar aspectos de reactividad.', 'Revisar documentación de Vuejs.', 0, 0, 0, 1);
INSERT INTO tasks (title, description, finished, important, deleted, active) VALUES ('Rehacer demo Vuejs', 'Utilizar un store con vuex.', 0, 0, 0, 1);
INSERT INTO tasks (title, description, finished, important, deleted, active) VALUES ('.NET', 'Aprender conceptos elementales de .NET', 0, 0, 0, 1);

INSERT INTO tasks (title, description, finished, important, deleted, active) VALUES ('Demo Vuejs', 'Crear seccion TAREAS', 1, 0, 0, 1);
INSERT INTO tasks (title, description, finished, important, deleted, active) VALUES ('Demo Vuejs', 'Crear seccion CITAS', 1, 0, 0, 1);

-- Insert meetings

INSERT INTO meetings (title, description, place, date, start, end, finished, deleted, active) VALUES ('Gestioo - Demo Vuejs', 'Entrega de la demo. Presentación breve de lo desarrollado.', 'Online', '2021-01-27', '10:00', '10:30', 0, 0, 1);
INSERT INTO meetings (title, description, place, date, start, end, finished, deleted, active) VALUES ('UX/UI', 'Nuevo concepto estético de la plataforma.', 'Oficinas Gestioo', '2021-02-9', '11:00', '13:00', 0, 0, 1);
INSERT INTO meetings (title, description, place, date, start, end, finished, deleted, active) VALUES ('Migración', 'Demo: migración de Nodejs a PHP. Evaluación.', 'Online', '2021-11-27', '15:00', '16:00', 0, 0, 1);
