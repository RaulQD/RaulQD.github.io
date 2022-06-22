> [webpack.js.org](https://webpack.js.org/)

# ¿Que es WEBPACK?

WEBPACK es un parque de módulos estaticos para aplicaciones JavaScript modernas.
Cuando webpack procesa su aplicación, crea internamente un gráfico de dependencia a partir de uno a más puntos de entrada y luego combina todos los modules que necesita su proyecto en uno o más paquetes, que son activos estaticos desde los que servir su contenido.

## Instalar WEBPACK

Para instalar WEBPACK debes ingresar los siguientes comandos

npm init -y --> para que cree el "package.json"
npm install --save-dev webpack-cli webpack --> para instalar las dependencias de webpack y poder usarlo.

## Configuración del Archivo webpack.config.js

Tenemos que crear un archivo de configuración para que actue como nosotros nos interesa. Necesitamos configurar webpack, el archivo debe tener un nombre muy contreto y particular
webpack.config.js.

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

Dentro del objecto module.exports debes crear 3 cosas:

- **MODE** --> MODO DE FUNCIONAMIENTO,( por defecto webpack funciona en modo PRODUCCIÓN)
- **ENTRY POINT**--> DESDE DONDE EMPIEZA LA APLICACIÓN.
- **OUTPUT POINT** --> PUNTO DE SALIDA, DONDE QUEREMOS QUE ESTE EL ARCHIVO CUANDO SE HAYA PROCESADO. SE DEBE ESTABLECER 2 COSAS:
- **PATH** --> la ruta donde esta el archivo, debes importarlo al momento de usar "path.resolve" para resolver una ruta. Debes Usar lo siguiente:

1. \_\_dirname : codigo de node.js
2. 'public' :la carpeta donde se guardara el archivo final **bundle.js**

- **FILENAME** --> nombre del archivo, debes poner nombres de forma dinamicas.

Al momento de de ejecutir el "NPM RUN BUILD" se creara un archivo definido en el WEBPACK.CONFIG.JS
para que no se cree archivos tras otro debes installar la dependencia **npm install --save-dev rimraf**

```Javascript
"SCRIPT":{
"build" : "rimraf dist && webpack";
}
```

## INSTALACIÓN DE BABEL

Instalar BABEL sirve para traducir codigo nuevo a codigo compatible con todos los navegadores.

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

```
