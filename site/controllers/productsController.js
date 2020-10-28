module.exports = {

    //listar productos
    //http://localhost:3000/products
    

    
    //alta productos
    //http://localhost:3000/products/create

    new : function(req, res){
        res.render("products/productCreate")
    },

    //editar productos
    //http://localhost:3000/products/:id/edit

    edit : function(req, res){
        res.render("products/productEdit")
    },
    
    //borrar productos
    //http://localhost:3000/products/:id
    
    //detalle productos
    //http://localhost:3000/products/:id
    
    show : function(req, res){
        res.render("products/productdetail")
    },
    
    
    }