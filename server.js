const express = require('express')
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 3000
const serverUrl = process.env.SERVER_URL || `http://localhost:${port}` 
const path = require('path')

const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const app = express();

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node API for Rservation Management', //reservation manager
            version: '1.0.0',
        },
        servers: [
            {
                url: serverUrl, //http://localhost:${port}
            },
        ],
    },
    apis: [`${path.join(__dirname, './Routes/*.js')}`],
}
app.use(cors());
const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use(express.json());


app.use('/api/reservations', require('./Routes/reservations'));
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.listen(port, () => console.log(`Server initialized in ${port}`))

