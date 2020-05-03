// Includes
// Bibliotecas

const express = require('express')
const app = require('express')()
const bodyparser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')

// adicionar pasta public estaticamente para o node carregar os arquivos js e css corretamente para o client-side
app.use(express.static(__dirname + '/public'));

// Funcionalidades do sistema
// Pessoas
const func_pessoa     = require('./func_pessoa')

// View
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

// Rotas
app.get('/', function(req, res) {
  res.redirect('/pessoas')
})

// Funcionalidades
func_pessoa(app)

// main
const porta = 1234;
app.listen(porta, function() {
  console.log('CRUD NODE\nServidor rodando na porta %s...', porta);
})