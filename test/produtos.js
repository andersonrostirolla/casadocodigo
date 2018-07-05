var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){

   beforeEach(function(done){
      var conn = express.infra.connectionFactory();
      conn.connect();
      conn.query("delete from livros", function(ex, result){
         conn.end();
         if (!ex){
            done();
         } else{
            console.log(ex);
         }
      });
   });

   it('#listagem json', function(done){
      request.get('/produtos')
      .set('Accept','application/json')
      .expect('Content-Type',/json/)
      .expect(200,done);
   });

   it('#cadastro de novo produto com dados invalidos', function(done){
      request.post('/produtos')
      .send({titulo:"",descricao:"novo livro"})
      .expect(400,done);
   });

   it('#cadastro de novo produto com dados validos', function(done){
      request.post('/produtos')
      .send({titulo:"Salvando para teste",descricao:"novo livro",preco:12.5})
      .expect(302,done);
   });
});