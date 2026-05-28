const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine({defaultLayout:false}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) =>{
  res.send("Bem-vindo ao sistema")
});

app.get('/aplicação', (req, res) =>{
  res.send("Este repositório serve para hospedar os exercícios e é uma mensagem da aplicação")
});

app.get('/contato', (req, res) =>{
  res.json({
  "email": "contato@email.com",
  "telefone": "(81) 99999-9999"
})
});

app.get('/erro', (req, res) =>{
  res.status(404).send("Página não encontrada")
});

app.get('/inicio', (req, res ) =>{
  res.redirect('/')
});

app.get('/usuario/:id',(req, res) =>{
  const id = req.params.id
  res.send(`usuário ${id}`)
});

app.get("/produtos/:nome", (req, res) =>{
  const nome = req.params.nome
  res.send(`${nome}`)
});

app.get("/filmes/:id/:nome", (req, res) =>{
  const id=req.params.id
  const nome=req.params.nome
  res.send(`id: ${id} nome do filme: ${nome}`)
});

app.get("/buscar" , (req, res) =>{
  const nome= req.query.nome
  res.send(`buscando por : ${nome} `)
});

app.get("/produtos", (req,res) =>{
  const categoria=req.query.categoria
  const pagina=req.query.pagina
  res.send(`categoria: ${categoria} página: ${pagina}`)
});

app.get("/usuarios", (req,res) =>{
  const idade =req.query.idade
  res.send(`Filtrando usuários com idade ${idade}`)
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);
