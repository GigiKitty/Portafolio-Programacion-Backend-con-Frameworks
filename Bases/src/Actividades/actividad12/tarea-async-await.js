        //Fase 1 Función asíncrona básica

function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function ejemploAsync(){
    console.log("Inicio de la funcion...")
    await esperar(2000)
    console.log("Han pasado 2 segundos")
}

ejemploAsync();

        //Fase 2 Login con objeto user usando async/await
const user = {
    username: "admin", 
    password: "1234", 
    active: true,
}

function login(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.username !== "admin" || user.password !== "1234"){
                reject("Credenciales incorrectas")
                return
            }

            if(!user.active) {
                reject("El usuario esta inactivo, contacte al administrador.")
                return
            }

            resolve(`Bienvenido ${user.username}, acceso concedido.`)
        }, 2000);
    });
}

async function ejecutarLogin(){
    try{
        const mensaje = await login(user)
        console.log(mensaje)
    } catch(error) {
        console.log(error)
    }
}

ejecutarLogin();

        // Fase 3 Flujo secuencial con async/await
function step(nombre, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log(`${nombre} completado`);
            resolve()
        }, tiempo);
    })
}

async function ejecutarPasos() {
    await step("Paso 1", 1000)
    await step("Paso 2", 1000)
    await step("Paso 3", 1000)
    console.log("Todos los pasos completados con async/await")
}

ejecutarPasos();