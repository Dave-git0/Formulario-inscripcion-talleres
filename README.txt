Sistema de Inscripción a Talleres Comunitarios
Descripción

Este proyecto es una aplicación web que permite registrar personas interesadas en participar en talleres comunitarios. El sistema recibe los datos del usuario a través de un formulario, valida la información ingresada y la almacena en una base de datos local utilizando SQLite.

El objetivo es simular un sistema real donde una institución necesita gestionar inscripciones de manera organizada y confiable.

Funcionalidades
Formulario de inscripción con los siguientes campos:
Nombre completo
Correo electrónico
Edad
Número de contacto
Taller de interés
Observación opcional
Validaciones en el lado del cliente:
Campos obligatorios
Edad mínima requerida
Formato de correo electrónico
Número de contacto con 10 dígitos
Mensajes de error y confirmación
Almacenamiento de datos en base de datos SQLite
Endpoint para consultar las inscripciones registradas
Tecnologías utilizadas
HTML: estructura del formulario
CSS: diseño visual y responsive
JavaScript: validación de datos y comunicación con el servidor
Node.js: entorno de ejecución del servidor
Express: manejo de rutas y servidor web
SQLite: base de datos local
Estructura del proyecto
proyecto/
│
├── server.js
├── package.json
├── database.db
│
└── public/
    ├── index.html
    ├── estilos.css
    └── script.js
Instalación y ejecución
Clonar o descargar el proyecto
Abrir una terminal en la carpeta del proyecto
Inicializar Node.js:
npm init -y
Instalar dependencias:
npm install express sqlite3 cors
Ejecutar el servidor:
node server.js
Abrir en el navegador:
http://localhost:3000
Uso
Completar el formulario con los datos solicitados
Enviar la información
El sistema valida los datos
Si todo es correcto, muestra un mensaje de confirmación
Los datos quedan almacenados en la base de datos
Consulta de datos

Para ver las inscripciones almacenadas, acceder a:

http://localhost:3000/inscripciones

Esto mostrará los registros en formato JSON.

Posibles mejoras
Mostrar los datos en una tabla dentro de la página
Implementar autenticación de usuarios
Mejorar el diseño visual
Validaciones más avanzadas
Conexión con bases de datos remotas
Autor

Juan David Rodríguez Garcia