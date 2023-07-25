const argv = require("./config/yargs.js");
const { crearArchivo } = require("./helpers/multiplicar.js");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreDeArchivo) => console.log(nombreDeArchivo, "creado"))
  .catch((err) => console.log(err));
