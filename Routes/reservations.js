const express = require('express')
const router = express.Router()

const reservationsController = require('../Controllers/reservationsController')

router.post('/', reservationsController.create)

router.get('/', reservationsController.readAll) 

router.put('/:id', reservationsController.update)

router.delete('/:id', reservationsController.delete)

router.get('/search', reservationsController.filter)

module.exports = router
