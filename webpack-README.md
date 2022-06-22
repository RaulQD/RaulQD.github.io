> [webpack.js.org](https://webpack.js.org/)

WEBPACK es un parque de módulos estaticos para aplicaciones JavaScript modernas.
Cuando webpack procesa su aplicación, crea internamente un gráfico de dependencia a partir de uno a más puntos de entrada y luego combina todos los modules que necesita su proyecto en uno o más paquetes, que son activos estaticos desde los que servir su contenido.

Para instalar WEBPACK debes ingresar los siguientes comandos

npm init -y --> para que cree el "package.json"
npm install --save-dev webpack-cli webpack --> para instalar las dependencias de webpack y poder usarlo.

Tenemos que crear un archivo de configuración para que actue como nosotros nos interesa. Necesitamos configurar webpack, el archivo debe tener un nombre muy contreto y particular
webpack.config.js.

En el webpack.config.js debemos exportar un objeto de configuración.
SINTAXIS:

module.exports = {

}

dentro del objecto module.exports debes crear 3 cosas:
**MODE** --> MODO DE FUNCIONAMIENTO,( por defecto webpack funciona en modo PRODUCCIÓN)
ENTRY POINT--> DESDE DONDE EMPIEZA LA APLICACIÓN
