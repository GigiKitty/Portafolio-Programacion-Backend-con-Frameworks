const promesaBasica = new Promise((resolve, reject) =>{
    const exito = true;

    if (exito) {
        resolve ("La operacion fue exitosa.")
    } else{
        reject("Ocurrio un error en la operacion.")
    }

})

promesaBasica
        .then(resultado => console.log("Then: ", resultado))
        .catch(error => console.log("Catch: ", error))