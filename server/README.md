# Task Manager

# Puesta en marcha

Para poder poner en marcha la aplicación deberás seguir los siguientes pasos:

# 1. Clonar repositorio GitHub

En primer lugar se debe clonar el repositorio.

# 2. Instalar Depencias

Deberás instalar todas las dependencias necesarias para el correcto funcionamiento de la aplicación. Ellas son: 

- body-parser
- cors
- dotenv
- express
- moment
- mysql2
- nodemon
- sequelize

# 3. Base de datos

En tercer lugar deberás crear la base de datos y dar de alta valores iniciales. 
La base de datos se encuentra en: server/src/database/database.sql

Al hacer esto se crearán todas las tablas y se darán de alta valores iniciales predeterminados. 

Para finalizar este paso deberás darle valor a las variables USERNAME y PASSWORD. Responden a los datos username y password, respectivamente, de tu base de datos. 

Estas variables se encuentran en el archivo .env dentro de la carpeta src

# 4. Puesta en marcha de la aplicación

En la terminal, deberás posicionarte en la carpeta src e iniciar la aplicación con nodemon server. 


