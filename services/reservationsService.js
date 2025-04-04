const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../data/database.json'); 

async function readReservations()   
{
    try {
        const data = await fs.readFile(dataPath, 'utf8'); 
        return JSON.parse(data); 

    } catch (error) {
        if (error.code === 'ENOENT') { 
            await writeReservations([]);  
            return []; 
    }
    throw error; 
}
}

async function writeReservations(reservations){
    await fs.writeFile(dataPath, JSON.stringify(reservations, null, 2), 'utf8'); 
}

module.exports = {
    readReservations,
    writeReservations
} 



