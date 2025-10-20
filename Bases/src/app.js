
/* 
import {} from './Actividades/actividad3/import2-export.js';
const { greet, despedida } = require('./Actividades/actividad3/import-export.js');
const { greet: greet2, despedida: despedida2 } = require('./Actividades/actividad3/import-export2.js');
  */
 /*
import { greet, despedida } from './Actividades/actividad3/import-export2.js';
greet();
despedida();
import {} from './Actividades/actividad4/nodemon.js';
console.log('prueba de nodemon');
*/



//-----------Actividad 5-----------------

require('./Actividades/actividad5/variables-entorno.js');



//-----------Actividad 6-----------------

require('./Actividades/actividad6/destructuring.js');

//-----------Actividad 7-----------------

//require('./Actividades/actividad7/callback.js');
require('./Actividades/actividad7/login-simulation.js');
require('./Actividades/actividad7/callback-hell.js');

//-----------Actividad 8-----------------
require("./Actividades/actividad8/arrow-function.js")

//-----------Actividad 9.1-----------------
require('./Actividades/actividad9/01-ejemplo-basico-promise.js')

//-----------Actividad 9.2-----------------
require('./Actividades/actividad9/02-ejemplo-login-promise.js')

//-----------Actividad 9.3-----------------
require('./Actividades/actividad9/03-ejemplo-encadenamiento-promises.js')

//-----------Actividad 10-----------------
const {  } = require("./plugins")
//const getPokemonById = require("./Actividades/actividad10/promises.js")
//const getPokemonById2 = require("./Actividades/actividad10/promises.js")
const getPokemonById5 = require("./Actividades/actividad10/promises.js")
/*
getPokemonById2(4, (pokemon) => {
  console.log({ pokemon })
})
*/
getPokemonById5(15)
  .then((pokemon) => console.log({  pokemon }))
  .catch((err) => console.log("Porfavor intente de nuevo"))
  .finally(() => console.log("Finalizamos"));
//console.log(`Pokemon con el ID ${id}`); //pokemon con el id 1
//console.log(getPokemonById(1));

// ...existing code...

//-----------Actividad 11-----------------

const { getPokemonById } = require("./Actividades/actividad11/async-await.js")
getPokemonById(6)
  .then((pokemon) => console.log({  pokemon }))
  .catch((err) => console.log("Porfavor intente de nuevo"))
  .finally(() => console.log("Finalizamos"));

//-----------Actividad 13-----------------
const { getPokemonById: getPokemonById13 } = require("./Actividades/actividad13/async-await-patronAdaptador.js");

getPokemonById13(8)
.then((pokemon) => console.log({ pokemon }))
.catch((err) => console.log("Porfavor intente de nuevo"))
.finally(() => console.log("Finalizamos"));

//-------------------actividad 14---------------
const {  } = require("./plugins");
const { getProductById } = require("./Actividades/actividad14/Axios.js");
getProductById(5)
.then((product) => console.log({ product }))
.catch((err) => console.log("Por favor intente de nuevo"))
.finally(() => console.log("Finalizamos"));