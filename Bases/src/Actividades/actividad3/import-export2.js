console.log("Actividad importaciones 2 y exportacion 2");

export function greet() {
    console.log("Hola, como estas?");
}

export function despedida() {
    console.log("Adios, hasta luego");
}

//module.exports = { greet, despedida };

export default { greet, despedida };