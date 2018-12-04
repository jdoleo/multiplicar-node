/*
// Una forma de hacerlo
const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 20
        }
    })
    .command('crear', 'Crea una archivo de la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 20
        }
    })
    .help()
    .argv;
*/

// Otra forma de hacerlo
const opts = {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 20
        }
    }
    // Una forma de hacerlo
const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multiplicar', opts)
    .command('crear', 'Crea una archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}