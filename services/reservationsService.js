const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../data/database.json'); //donde se guarda la info

async function readReservations()   //función para leer la información
{
    try {
        const data = await fs.readFile(dataPath, 'utf8'); //lee el archivo en con datapath con el idioma utf8
        return JSON.parse(data); //toda la información de datapath se parsea a JSON(transforma en formato json)

    } catch (error) {
        if (error.code === 'ENOENT') { // si hay algún error
            await writeReservations([]);  // leer el writeReservations con corchetes vacíos
            return []; //retorna corchete vacío
    }
    throw error; // si no entra por el try y no entra por el catch, tira un error.
}
}

async function writeReservations(reservations){
    await fs.writeFile(dataPath, JSON.stringify(reservations, null, 2), 'utf8'); //donde ba escribir(en el datapath) lo transforma en formato jason en string a orders. en el jason ocupamos el vaolor(reservations), decimos que no lo reemplazamos(null), y ocupamos dos espacios(2)
}

module.exports = {
    readReservations,
    writeReservations
}  //método de express para exportar funciones.



