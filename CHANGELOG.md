# Example Backend
## Upcoming version
## 1.1.0

-----------

## 1.0.0
### Features

En esta versión se hace una separación de responsabilidades para permitir que el proyecto sea mantenible.
siguiendo la siguiente estructura:
```$javascript  
├── src
│   ├── example.web
│   |   └── index.html
│   └── example.services
│   |   ├── services
│   |   ├── middlewares
│   |   └── controllers
│   ├── boostrap.ts
│   └── Server.ts
└── package.json
```
Se incluye un framework de Node.js y TypeScript [tsed.io](https://tsed.io/) adicionando las siguientes dependencias:

Decorators
Rest API
Dependency Injection
Controller

```$javascript  
"@tsed/common": "^5.45.0",
"@tsed/core": "^5.45.0",
"@types/express": "^4.17.6",
"body-parser": "^1.19.0",
"compression": "^1.7.4",
"cookie-parser": "^1.4.5",
"method-override": "^3.0.0",
"nodemon": "^2.0.3",
```
Tambien se modifica los scripts del proyecto:

```$javascript  
"start:debug": "nodemon --watch \"src/**/*.ts\" --ignore \"node_modules/**/*\" --exec ts-node src/bootstrap.ts",
"start": "node bin/bootstrap.js"
```

`npm run start:debug` permite ejecutar el servidor en ambiente de desarrollo, recompilando la App cada vez que existe un cambio
`npm run start` permite ejecutar el servidor en ambiente de producción, usando la carpeta con los archivos compilados `./bin`
