        //Crear un objeto
const person = {
    fistName: 'Alely',
    lastName: 'Sainz',
    age: 2
}
console.log(person);

        //Destructuring
const { fistName, lastName, country = 'Mexico' } = person;
console.log({fistName, lastName, country});
//console.log(fistName);

         //Crear un alias de una propiedad de un objeto

let { lastName: myLastName } = person;
console.log({myLastName});

        //Destructuring una cadena de texto

const text = 'Esta es una cadena de texto';
let [s1, s2, s3, s4, s5, s6, , , ,s10 ] = text;
console.log(s1, s2, s3, s4, s5, s6, s10);

        //Crear un array denominado fruits

const fruits = ['Fresa', 'Banana', 'Mandarina'];
const [f1, f2, f3, f4 = 'Kiwi'] = fruits;
console.log(f1, f2, f3, f4);

        //Crear un arreglo numero

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [a, b, ...rest] = numbers;
console.table(rest);

        //Recuperar objetos de variables de entorno

const {PORT = 3000, HOST = 'localhost' }= process.env 
console.log(`Server runing at http://${HOST}:${PORT}`);

