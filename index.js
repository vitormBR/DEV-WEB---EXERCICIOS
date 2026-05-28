const express = require('express');
const app = express();


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

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);
