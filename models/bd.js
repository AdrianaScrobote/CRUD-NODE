const seq = require('sequelize')

// BD
const banco_dados = new seq('crudnode', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

// Exports
module.exports = {
  seq: seq,
  banco_dados: banco_dados
}