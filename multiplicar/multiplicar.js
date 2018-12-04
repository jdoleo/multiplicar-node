// requireds
const fs = require('fs');
const colors = require('colors');

// const fs = require('express'); Paquetes que no son nativos de node
// const fs = require('./fs'); archivos que creamos en nuestro proyecto



let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;

        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un número`);
            return;

        }

        console.log('========================================='.green);
        console.log(` Tabla de ${ base }`.green);
        console.log('========================================='.green);


        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base*i }\n`);
        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    });
}

// Exportamos la función
module.exports = {
    crearArchivo,
    listarTabla
}