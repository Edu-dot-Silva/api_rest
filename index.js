const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// ativar o cors
app.use(cors())

// rota para somar os numeros
app.get('/api/somar' , (req , res)=>{
    const numero1 = parseFloat(req.query.numero1)
    const numero2 = parseFloat(req.query.numero2)
    const soma = numero1 + numero2
    res.json({soma})
})

// iniciar o servidor
app.listen(port, ()=>{
    console.log(`Servidor iniciado em http://localhost:${port}`);
})