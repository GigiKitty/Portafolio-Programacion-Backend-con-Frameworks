function step1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 1 completado")
            resolve();
        }, 1000)
    })
}

function step2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 2 completado")
            resolve();
        }, 1000)
    })
}

function step3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 3 completado")
            resolve();
        }, 1000)
    })
}

//Encadenamiento
step1()
    .then(() => step2())
    .then(() => step3())
    .then(() => console.log("Todos los pasos completados"));