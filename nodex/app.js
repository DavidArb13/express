const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<h1>Index de NODEX</h1>')
})

app.get('/task', (req, res) => {
    res.send('<h1>Soy en Index de las tareas</h1>')
})

app.get('/task/:id', (req, res) => {
    res.send('<h3>Soy el VIEW de la tarea específica</h3><h1>' + req.params.id + "</h1>")
})

app.post('/task', (req, res) => {
    console.log(req.body.title)
    res.send(req.body)
})

app.delete('/task/:id', (req, res) => {
    res.send('<h3>Soy el DELETE de la tarea específica</h3><h1>' + req.params.id + "</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})