const express = require('express');
const cors = require('cors');
const app = express();


//settings
app.set('port', 4000);
//middlewares
app.use(cors());
app.use(express.json());


//routes
/*app.get('/api/users', (req, res) => res.send('Hi there from users!'));
app.get('/api/orders', (req, res) => res.send('Hi there from orders!'));*/

app.use('/api/users', require('./routes/users'))
app.use('/api/orders', require('./routes/orders'))

app.use('/api/auth', require('./routes/auth'))

app.use('/api/category', require('./routes/category'))
app.use('/api/stock', require('./routes/stock'))





module.exports = app;