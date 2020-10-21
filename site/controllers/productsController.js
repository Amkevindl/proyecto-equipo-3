module.exports = {

    //listar productos
    //http://localhost:3000/products
    
    list : function(req, res){
        res.send('listado de categoria')
    },
    
    //alta productos
    //http://localhost:3000/products/create

    edit : function(req, res){
        res.send(productEdit)
    },
    
    //editar productos
    //http://localhost:3000/products/:id/edit
    
    //borrar productos
    //http://localhost:3000/products/:id
    
    //detalle productos
    //http://localhost:3000/products/:id
    
    show : function(req, res){
        res.send('detalle de la categoria')
    },
    
    
    }