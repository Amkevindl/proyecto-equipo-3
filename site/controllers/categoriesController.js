module.exports = {

//listar categorias
//http://localhost:3000/categories

list : function(req, res){
    res.send('listado de categoria')
},


//alta categorias
//http://localhost:3000/categories/create

//editar categorias
//http://localhost:3000/categories/:id/edit

//borrar categorias
//http://localhost:3000/categories/:id

//detalle categorias
//http://localhost:3000/categories/:id

show : function(req, res){
    res.send('detalle de la categoria')
},


}