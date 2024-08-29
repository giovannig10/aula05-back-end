import express from 'express'
import { config } from 'dotenv'

config ()

const serverPort = process.env.PORT

const app = express()

app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Alegria",
        cor: "Azul"
    },
    {
        id: 2,
        nome: "Tristeza",
        cor: "Roxo"
    },
    {
        id: 3,
        nome: "Nojinho",
        cor: "Verde"
    }

]

const personagens = [
    {
        id: 1,
        nome: "goku",
        vivo: true
    },
    {
        id: 2,
        nome: "vegeta",
        vivo: true
    },
    {
        id: 3,
        nome: "freeza",
        vivo: false
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})
app.get("/emocoes", (req, res) => {
    return res.status(200).send( emocoes )
})
app.post("/emocoes", (req, res) => {
    const {nome, cor} = req.body
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(novaEmocao)
    return res.status(200).send( emocoes )
})
app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})
app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)
})

app.listen(serverPort, () => {
    console.log(`😍 Server started on http://localhost:${serverPort}`)
})