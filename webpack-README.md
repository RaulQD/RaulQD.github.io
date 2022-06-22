> [webpack.js.org](https://webpack.js.org/)

## ¿Que es WEBPACK?

WEBPACK es un parque de módulos estaticos para aplicaciones JavaScript modernas.
Cuando webpack procesa su aplicación, crea internamente un gráfico de dependencia a partir de uno a más puntos de entrada y luego combina todos los modules que necesita su proyecto en uno o más paquetes, que son activos estaticos desde los que servir su contenido.

### Instalar WEBPACK

---

Para instalar WEBPACK debes ingresar los siguientes comandos

npm init -y --> para que cree el "package.json"
npm install --save-dev webpack-cli webpack --> para instalar las dependencias de webpack y poder usarlo.

### Configuración del Archivo webpack.config.js

---

Tenemos que crear un archivo de configuración para que actue como nosotros nos interesa. Necesitamos configurar webpack, el archivo debe tener un nombre muy contreto y particular
webpack.config.js.

En el webpack.config.js debemos exportar un objeto de configuración.

SINTAXIS:

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

dentro del objecto module.exports debes crear 3 cosas:

- **MODE** --> MODO DE FUNCIONAMIENTO,( por defecto webpack funciona en modo PRODUCCIÓN)
- **ENTRY POINT**--> DESDE DONDE EMPIEZA LA APLICACIÓN.
- **OUTPUT POINT** --> PUNTO DE SALIDA, DONDE QUEREMOS QUE ESTE EL ARCHIVO CUANDO SE HAYA PROCESADO. SE DEBE ESTABLECER 2 COSAS:
- **PATH** --> la ruta donde esta el archivo, debes importarlo al moment de usar "path.join".
- **FILENAME** --> nombre del archivo, debes poner nombres de forma dinamicas.

Al momento de de ejecutir el "NPM RUN BUILD" se creara un archivo definido en el WEBPACK.CONFIG.JS
para que no se cree archivos tras otro debes usar lo siguiente:
En el package.json dentro del **OBJECTO SCRIPT** debes poner:

"SCRIPT":{
"build" : "rm -rf dist && webpack";
}
