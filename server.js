const express = require('express')
const open = require('open')
const fs = require('fs');
const app = express()
require('dotenv').config()

app.use(express.json())


app.post('/webhook',  (req, res) => {
    console.log(req.body.metadata)
    fs.writeFile('webhook.html', req.body.html, (err, data) => {
        if (err) {
            console.log('err', err)
        }}
 )
    fs.writeFile('metadata.html', req.body.metadata, (err, data) => {
        if (err) {
            console.log('err', err)
        }}
 )
    res.sendStatus(200)
})

app.get('/', (_, res) => 
res.sendFile('./webhook.html',{root: __dirname })
)
app.get('/metadata', (_, res) => 
res.sendFile('./metadata.html',{root: __dirname })
)

app.listen(process.env.PORT)
console.log(`listening on ${process.env.PORT}`)

