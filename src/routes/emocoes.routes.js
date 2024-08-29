import { Router } from "express"

const emocoesRoutes = Router()

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