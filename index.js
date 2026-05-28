const express = require('express');
const app = express();


app.get('/', (req, res) =>{
  res.send("Bem-vindo ao sistema")
});

app.get('/aplicação', (req, res) =>{
  res.send("Este repositório serve para hospedar os exercícios e é uma mensagem da aplicação")
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);
