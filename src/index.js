const app = require('./app');
require('./database');

//app.listen(4000, () => console.log('Ronald 4000'));

async function main() {
    //await app.listen(4000);
    await app.listen(app.get('port'));
    //console.log('Ronald 4000 ;)');
    console.log(': ', app.get('port')); 
}

main();

//backend>node src/index.js
//backend>npx nodemon src/index.js
//backend>npm run test