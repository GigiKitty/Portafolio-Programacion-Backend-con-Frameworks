const user = process.env.USER;
const password = process.env.PASSWORD;
const port = process.env.PORT;

console.log('User:', user);
console.log('Password:', password);
console.log('Port:', port);

const nodeEnv = process.env.NODE_ENV || 'development';
//console.log(nodeEnv);

if (process.env.NODE_ENV == 'Production') {
    console.log('Production optimiacions enable');
} else {
    console.log(`Running in ${nodeEnv} mode`);
}