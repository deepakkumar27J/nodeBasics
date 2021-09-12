
const express = require('express')
const app = express()
const fs = require("fs")

const { parseAddress, parseAddressAsync, parseAddressPromises } = require('./functions/common');

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))

//
app.get('/A/I/want/title', parseAddress)
app.get('/B/I/want/title', parseAddressAsync)
app.get('/C/I/want/title', parseAddressPromises)
app.listen(3000)
