const express = require ('express');
const app = express();
const path = require ('path');

app.listen(3030);
app.get('/', function (req,res) {
    let file = path.resolve('./vistas/index.html');
    res.sendFile (file);
})

app.get('/login', function (req,res) {
    let file = path.resolve('./vistas/login.html');
    res.sendFile (file);
})

app.get('/register', function (req,res) {
    let file = path.resolve('./vistas/register.html');
    res.sendFile (file);
})

<<<<<<< HEAD
app.get('/productDetail', function (req,res) {
    let file = path.resolve('./vistas/productDetail.html');
=======
app.get('/productcart', function (req,res) {
    let file = path.resolve('./vistas/productCart.html');
>>>>>>> 54151dae8214264e2cac742479b87dbe7acf4ff1
    res.sendFile (file);
})

app.get('*', function (req,res) {
    if (req.url.includes('.')) { 
    let file = path.resolve('public/' + req.url)
    return res.sendFile(file);
}
res.send('Not found');
})


