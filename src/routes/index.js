const express = require('express')
const router = express.Router()
const slot       = require('./slot.controller')
const addSlotController = require('./addSlot.controller')

router.use ('/slot',slot)
router.use('/addSlot',addSlotController)

module.exports = router
