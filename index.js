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

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);
