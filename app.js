const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');

mongoose.connect('mongodb+srv://jaatarsoufian:wpu2hWsWeEry@cluster.vykzrhy.mongodb.net/?retryWrites=true&w=majority', 

);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','*');
    if(req.method === 'OPTIONS')
    {
res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,GET');
return res.status(200).json({});
    }
    next();
});
// Routes that handle requests 
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

app.use((req,res,next)=>
{

    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req,res, next)=>{
res.status(error.status ||500);
res.json({

    error: {
        message: error.message
    }
})
});

module.exports = app;