> [webpack.js.org](https://webpack.js.org/)

# ¿Que es WEBPACK?

WEBPACK es un **empaquetador de módulos** estaticos para aplicaciones JavaScript modernas.
Cuando webpack procesa su aplicación, te permite generar un **archivo único** con todos aquellos **MODULES** que necesita tu aplicación para funcionar, es decir, te permite incluir todos tus archicos javascript.js en un único arvhico.

## Instalar WEBPACK

Para instalar WEBPACK debes ingresar los siguientes comandos:

Para crear el **package.json**:

```npm
npm init -y
```

para instalar las dependencias de webpack y poder usarlo.

```npm
npm install --save-dev webpack-cli webpack
```

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

- **@babel/core** : Es el nucleo de babel, Es el funcionamiento de babel👍.
- **@babel/preset-env** : Permite transformar el codigo nuevo a codigo compatible con otros navegadores👍.
- **babel-loader** : permite transpilar archivos de javaScript usando **BABEL** y **WEBPACK**👍.

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

## INSTALAR STYLE-LOADER

Inyecta CSS en el DOOM y entiende el estilo del archivo importado **"./style.css"**

para instalar usa lo siguiente:

```npm
npm install style-loader --save.dev
```

agregar la configuración en **webpack.config.js**.

- SINTAXIS

```javascript
module: {
  rules: [
    {
      test: /\.css$/i,
      loader: ["style-loader", "css-loader"],
    },
  ];
}
```

## INSTALAR CSS-LOADER

Los css-loader interpreta @import y url() como un gusta import/require() y los resolverá.

para instalar usa lo siguiente:

```npm
npm install css-loader --save.dev
```

agregar la configuración en **webpack.config.js**.

```javascript
module: {
  rules: [
    {
      test: /\.css$/i,
      loader: ["style-loader", "css-loader"],
    },
  ];
}
```

## INSTALAR SASS-LOADER

Carga archivos SASS/SCSS y compilalos en CSS.

```
npm install --save-dev sass sass-loader
```

para poder usar **SASS** debes añadir el **sass-loader** dentro del rules en el **webpack.config.js**.

Por ejemplo:

```javascript
module: {
  rules: [
    {
      test: /\.s[ac]ss$/i,
      loader: ["style-loader", "css-loader", "sass-loader"],
    },
  ];
}
```

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

### SINTAXIS

```javascript
module.exports = {
  module: {
    .....
    devServer:{
        open:true, // abre el navegador
        port: 3000, // el puerto donde abre el navegador
        overlay: true // te mandar el error en la misma pagina(overlay)
    }

    ....
  },
};
```

## PLUGIN HTMLWEBPACKPLUGIN

Exporta HTML como cadena. HTML se minimiza cuando el compilador lo exige.

### INSTALACIÓN

```npm
npm install --save-dev html-webpack-plugin
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

## PLUGIN MINI-CSS-EXTRACT-PLUGIN

Este plugin extrae **CSS** en archivos separados. Esto crea un archivo.css por un archivo.js el cual contiene codigo CSS. Esto es compatible demanda de carga de CSS y SourceMaps.

### INSTALACION

para comenzar, debes instalar la siguiente dependencia.

```
npm install --save-dev mini-css-extract-plugin
```

## HASHEAR LOS ARCHIVOS JS CON WEPACK

Para hashear debemos diferenciar entre desarrollo y producción,por que debemos aplicar el hashing en modo de producción y no en el desarrollo.

Como saber si estamos en modo **desarrollo** o en modo **producción**?.

la configuración de webpack puede tambien ser una función que devuelva un objeto, por ejemplo:

- SINTAXIS:

```javascript
module.exports = () => {
    return {

        //CODOGIO EN ESTA PARTE
        ....
    }
}
```

En vez de usar el **module.exports en modo objeto** se puede cambiar a una función usando un return como el ejemplo de arriba y la configuración ponerlo dentro del return.

En la función de configuración de **webpack** debe recibir 2 parametros **env** y **argv**.

- SINTAXIS

```javascript
module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {};
};
```

destructuras el mode de los argumentos (**argv**) y despues validamos si **mode** es production o no:

- SINTAXIS

```javascript
module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    output:{
        filename: isProduction ? '[name].[contenthash].js' // SIRVE PARA HASHEAR EL ARCHIVO.JS
        path: path.resolve(__dirname, 'public')
    }
  };
};
```

En el **FILENAME** validamos si es producción o no con el **OPERADOR TERNARIO**, tenemos que usar las **magic strings**. Ente corchetes tenemos que poner el nombre del archivo. **CONTENTHASH**, dependiendo del contenido que tenga el archivo va añadir un **hash** diferente para que lo puedas cachear y cuando cambia ese contenido sera diferente el hash.
