const express = require('express');
const zoneController = require('../Controllers/zoneController');
const router = express.Router();

// Route handler for "/zone"
router.post('/', zoneController);


module.exports = router;