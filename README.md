# ToDo App

Esta app consiste en una utilidad para crear listados de tareas, con la posibilidad de dividirlas en distintas carpetas.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

## Construido con 🛠️

* MySQL 8.0.23
* Java 11
* Spring Tools 4.10.0
* React 17.0.2

Para que funcione correctamente la aplicación, modificar los valores de configuración (usuario y contraseña) para la base de datos en el archivo `backend\src\main\resources\application.properties`.

## Iniciar la aplicación 📦

### Base de datos

Asegurarse de tener iniciado el servicio de MySQL, para que la aplicación se pueda conectar y crear la base de datos y sus respectivas tablas.

### [Backend](./backend)

Puede iniciarse de dos formas:
* Abrir `./backend` en cualquier IDE (IntelliJ/Eclipse, etc.) y ejecutar la aplicación
* Ubicarse en `./backend` y ejecutar desde la terminal:
	1. `./mvnw.cmd package`
	2. `java -jar .\target\todo-backend-0.0.1-SNAPSHOT.jar `

El backend se servirá en `http://localhost:8080`.

### [Frontend](./frontend)

Para iniciar la aplicación de Frontend ubicarse en `./frontend` y luego:
* Instalar las dependencias ejecutando `npm install`
* Iniciar la aplicación con el comando `npm start`

La aplicación iniciará en `http://localhost:3000`
