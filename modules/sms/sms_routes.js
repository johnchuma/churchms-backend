const {Router} = require('express')
const { sendMessage } = require('./sms_controllers')

const router = Router()

router.post('/',sendMessage)

module.exports = router