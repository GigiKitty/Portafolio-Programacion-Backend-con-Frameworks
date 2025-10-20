function login(user, callbacks) {
    setTimeout(() => {
        if(user.username === 'admin' && user.password === 'Ues12345') {
            callbacks(null, "Acceso concedido");
        } else {
            callbacks("Credenciales incorrectas");
        }
    });   
}

const user = {username: 'admin', password: 'Ues12345'};

login(user, (error, message) => 
{
    if(error) {
        console.log("Error: ", error);
    } else {
        console.log(message);
    }
});




  
