const express = require('express');
const router = express.Router();
const controller = require("../controllers/detailController")

/* GET users listing. */
router.get('/:id', controller.detallePorId);

module.exports = router;