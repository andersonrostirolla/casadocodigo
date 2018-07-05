function ProdutosDAO(connection){
   this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
   this._connection.query('select * from livros', callback);
}

ProdutosDAO.prototype.salva = function(produto,callback){
  this._connection.query('insert into livros (titulo, preco, descricao) values($1,$2,$3)', [produto.titulo, produto.preco, produto.descricao], callback);
}

module.exports = function(){
   return ProdutosDAO;
}