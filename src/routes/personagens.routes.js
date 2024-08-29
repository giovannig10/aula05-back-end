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

app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)
})

