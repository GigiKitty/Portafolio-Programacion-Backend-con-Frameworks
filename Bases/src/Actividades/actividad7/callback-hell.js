function step1(next){
    setTimeout(() => {
        console.log("Paso 1 completado");
        next();
    }, 1000);
}

function step2(next){
    setTimeout(() => {
        console.log("Paso 2 completado");
        next();
    }, 1000); 
}

function step3(next){
    setTimeout(() => {
        console.log("Paso 3 completado");
        next();
    }, 1000);
}

step1(() => {
    step2(() => {
    step3(() => {
console.log("Todos los pasos completados");});
    });
});