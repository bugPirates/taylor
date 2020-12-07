const express = require('express')
const TokoCtrl = require('../controllers/toko-ctrl')

const router = express.Router()

router.post('/toko', TokoCtrl.createToko)
router.put('/toko/:id', TokoCtrl.updateToko)
router.delete('/toko/:id', TokoCtrl.deletToko)
router.get('/toko/:id', TokoCtrl.getTokoById)
router.get('/toko', TokoCtrl.getToko
)

module.exports = router