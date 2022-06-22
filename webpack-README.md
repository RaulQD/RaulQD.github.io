> [webpack.js.org](https://webpack.js.org/)

# ¿Que es WEBPACK?

WEBPACK es un **empaquetador de módulos** estaticos para aplicaciones JavaScript modernas.
Cuando webpack procesa su aplicación, te permite generar un **archivo único** con todos aquellos **MODULES** que necesita tu aplicación para funcionar, es decir, te permite incluir todos tus archicos javascript.js en un único arvhico.

## Instalar WEBPACK

Para instalar WEBPACK debes ingresar los siguientes comandos:

npm init -y --> para crear el "package.json"
npm install --save-dev webpack-cli webpack --> para instalar las dependencias de webpack y poder usarlo.

## Configuración del Archivo webpack.config.js

Tenemos que crear un archivo de configuración para que actue como nosotros queramos. Necesitamos configurar webpack, el archivo debe tener un nombre muy contreto y particular webpack.config.js.

En el webpack.config.js debemos exportar un objeto de configuración.

- SINTAXIS:

```Javascript
const path = require('path');
const basePath = __dirname;
const distPath = 'dist';
module.exports = {
    //modo de funcionamiento
    mode:"development",
    //entry point
    entry: {
        app:'./src/index.js/'
    },
    //OUTPUT POINT
    output:{
        path: path.join(basePath, distPath);
        filename: 'bundle.js'
    }
}
```

Dentro del objeto **module.exports** debes crear 3 propiedades:

- **MODE** --> MODO DE FUNCIONAMIENTO,( por defecto webpack funciona en modo PRODUCCIÓN)
- **ENTRY POINT**--> Donde inicia nuestra aplicación, Es el archivo principal.
- **OUTPUT POINT** --> PUNTO DE SALIDA o ARCHIVO DE SALIDA, Toma todo los archivos de Javascript para compilarlo en un solo archivo.js.

SE DEBE ESTABLECER 2 OPCIONES:

- **PATH** --> la ruta donde esta el archivo, debes importarlo al momento de usar "path.resolve" para resolver una ruta. Debes Usar lo siguiente:

1. \_\_dirname : codigo de node.js
2. 'public' :la carpeta donde se guardara el archivo final **bundle.js**

- **FILENAME** --> nombre del archivo, debes poner nombres de forma dinamicas.

Al momento de de ejecutar el **NPM RUN BUIL** se creara un archivo definido en el **WEBPACK.CONFIG.JS**.
para que no se cree archivos tras otro debes installar la dependencia **npm install --save-dev rimraf**.

```Javascript
"SCRIPT":{
"build" : "rimraf dist && webpack";
}
```

## INSTALACIÓN DE BABEL

Instalar **BABEL** sirve para traducir codigo nuevo a codigo compatible con todos los navegadores.

- INSTALAR BABEL:

```npm
npm install --save-dev @babel/core @babel/preset-env babel-loader
```

### DEPENDENCIAS DE BABEL

- @babel/core : Es el nucleo de babel, Es el funcionamiento de babel👍.
- @babel/preset-env : Permite transformar el codigo nuevo a codigo compatible con otros navegadores👍.
- babel-loader : permite transpilar archivos de javaScript usando **BABEL** y **WEBPACK**👍.

#### CONFIGURACIÓN DE BABEL

En nuestro **WEBPACK.CONFIG.BABEL** debemos ingresar una palabra clave llamada **MODULE** y vamos a agregar una regla **RULES** y sera un matriz de objetos.

- SINTAXIS:

```javascript
module.exports = {
    //mode
    .....
    //Entry
    .....
    module: {
        rules:[
            {
                test:/\.m?js$/, // Busca todo los archivos que terminan en .js
                exclude:/(node_modules)/, // NO ES NECESARIO EJECUTAR LA CARPETA NODE_MODULES
                use: {
                    loader:'babel-loader',
                    options:{
                        "presets":["@babel/preset-env"]
                    }
                }
            },
        ]
    }
    //OUTPUT POINT
    ....
}
```

Luego, crearemos un nuevo archivo llamado **.babel.config.js**, para agregar el plugin @babel/presets-env.

- SINTAXIS

```javascript
{
  "presets": ["@babel/preset-env"]
}
```

Este plugin permite transformar el codigo nuevo a codigo compatible con todo los navegadores web.

## ENTERNO DE DESARROLLO - WEBPACK-DEV-SERVER API

Es un servidor de desarrollo para **WEBPACK**, para poder ver en vivo cada recarga que realizamos a nuestro navegador.

### INSTALACIÓN DE WEBPACK-DEV-SERVER

```npm

npm install --save-dev webpack-dev-server

```

Luego agregamos un script entorno de desarrollo en **package.json**

```Javascript
"SCRIPT":{
"dev" : "webpack serve --mode=development";
}
```

para poder ejecutar el **webpack server** usa el script que creaste en el **package.json**

```npm
  npm run dev
```

### CONFIGURAR EL WEBPACK-DEV-SERVER-

puedes agregar diferentes propiedades para la configuración de tú navegador, por ejemplo:

- **OPEN** : true --> sirve para abrir automaticamente el navegador 👍.
- **OVERLAY** : true --> sirve para abrir un overlay con los errors 👍.
- **PORT** : 3000 --> En que puerto quisieras abrir tu proyecto 👍.

## PLUGIN HTMLWEBPACKPLUGIN

Exporta HTML como cadena. HTML se minimiza cuando el compilador lo exige.

### INSTALACIÓN

```npm
    npm install --save-dev html-loader
```

Luego debemos agregar el Plugin como una nueva regla(**rules**) en nuestro **webpack.config.js**

Por ejemplo:

```javascript
module.exports = {
  module: {
    .....
    {
        plugins :[
            new HtmlWebpackPlugin({
                template:'src/index.html'
            })
        ]
    }

    ....
  },
};
```
