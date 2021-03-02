const mongoose = require('mongoose');

const uri = 'mongodb://localhost/merndar'; // ? '' : 'mongodb://localhost/merntest';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
    //useFindAndModify: false
});

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('// ;)');
});

