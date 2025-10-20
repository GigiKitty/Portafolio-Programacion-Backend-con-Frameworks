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

//Ejecucion de la promesa
login(user)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));