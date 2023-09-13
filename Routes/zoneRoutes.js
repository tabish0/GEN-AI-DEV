const express = require('express');
const zoneController = require('../Controllers/zoneController');
const router = express.Router();
const upload = require('../multer')

// Route handler for "/zone"
router.post('/', upload.array('files'), zoneController);


module.exports = router;