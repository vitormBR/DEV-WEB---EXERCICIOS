const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine({defaultLayout:false}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let videos = [
    {
        titulo: "Gameplay Minecraft",
        criador: "Vitor",
        descricao: "Jogando Minecraft",
        visualizacoes: 5000,
        curtidas: 900,
        hashtag: "#minecraft",
        urlVideo: "https://youtube.com",
        thumbnail:
            "https://placehold.co/200x120"
    }
];

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/videos", (req, res) => {

    res.render("videos", {
        videos
    });

});
app.get("/videos/cadastrar", (req, res) => {

    res.render("cadastrarVideo");

});


app.post("/videos", (req, res) => {

    const novoVideo = {
        titulo: req.body.titulo,
        criador: req.body.criador,
        descricao: req.body.descricao,
        visualizacoes:
            req.body.visualizacoes,
        curtidas:
            req.body.curtidas,
        hashtag:
            req.body.hashtag,
        urlVideo:
            req.body.urlVideo,
        thumbnail:
            req.body.thumbnail
    };

    videos.push(novoVideo);

    res.redirect("/videos");
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});
