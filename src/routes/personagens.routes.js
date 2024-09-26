import { Router } from "express"

const personagensRoutes = Router()

let personagens = [
    {
        id: 1,
        nome: "goku",
        vivo: true,
        studio: "toei"
    },
    {
        id: 2,
        nome: "vegeta",
        vivo: true,
        studio: "toei"
    },
    {
        id: 3,
        nome: "freeza",
        vivo: false,
        studio: "toei"
    }
]

personagensRoutes.get("/", (req, res) => {
    return res.status(200)
    .send(personagens)
})

personagensRoutes.post("/", (req, res) => {
    const {nome, vivo, studio} = req.body
    
    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        vivo: vivo,
        studio: studio
    }
    personagens.push(novoPersonagem)
    return res.status(201).send(novoPersonagem)
    })

    personagensRoutes.delete("/:id", (req, res) => {
        const {id} = req.params
    
        const personagem = personagens.find((emotion) => person.id == id )
    
        if (!personagem) {
            return res.status(200).send ({
                message: "Personagem não encontrado!", 
            })}
    
            personagens = personagens.filter((person) => person.id != id)
            return res.status(200).send({
                message: "Personagem deletado",
                personagem, 
            })
    })

export default personagensRoutes;
