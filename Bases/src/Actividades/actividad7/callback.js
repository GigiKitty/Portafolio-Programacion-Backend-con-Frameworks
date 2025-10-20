        //Ejemplo basico de callback usando setTimeout

//Esta funcion recibe como argumento una valor denominado name y recibe una funcion callback
function greet(name, callback) {
    console.log('Procesando saludo...');
    setTimeout(() => {
        console.log(`Hola ${name}, bienvenido a Node.js`);
        callback();
    }), 2000;
}

function showMessage(message) {
    console.log(message);
}   

greet('Valentin',showMessage);