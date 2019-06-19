const express= require('express')
const path = require('path')
const app= express()

app.use(express.static(path.join(__dirname, 'client')))

app.get('/marketshop', (req, res)=>{
	res.sendFile(path.join(__dirname, './client/marketshop.html'))
})

app.get('/shoes-shop', (req, res)=>{
	res.sendFile(path.join(__dirname, './client/shoes-shop.html'))
})

app.listen(3100, ()=>{
	console.log('Server listening on port 3100');
})
