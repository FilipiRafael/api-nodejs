const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/filmes', (request, response) => {
    const filmes = [
        { nome: "John Wick 2" },
        { nome: "Os vingadores" },
        { nome: "Silicon Valley" },
        { nome: "Forrest Gump" }
    ]

    response.send(JSON.stringify(filmes))
})

app.get('/api/linguagens', (request, response) => {
    linguagens = [
        { nome: "Python" },
        { nome: "JavaScript" },
        { nome: "Java" },
        { nome: "Ruby" },
        { nome: "PHP" }
    ]

    response.send(JSON.stringify(linguagens))
})

app.listen(8080, () => {
    console.log('API funcionando...')
})