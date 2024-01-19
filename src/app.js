const express=require('express');
const morgan=require('morgan');
const{db}=require('./firebase');

const app= express();

app.use(morgan('dev'));

app.get('/', async(req, res) => {
 const querySnapshot=   await db.collection('productos').get();

 console.log(querySnapshot.docs[0].data());
    res.send('Rosemar Torres C.I:30.961.767  seccion 3');
});



module.exports=app;
