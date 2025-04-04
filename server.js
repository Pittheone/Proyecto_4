const express = require('express')
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 3000
//const serverUrl = process.env.SERVER_URL || `http://localhost:${port}` para swagger
//sacar de .env hasta poner swagger
//normalmente hay una carpeta en bd -- config -- modelo
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/reservations', require('./Routes/reservations'));
app.listen(port, () => console.log(`Server initialized in ${port}`))

