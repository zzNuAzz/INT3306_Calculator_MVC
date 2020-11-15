const express = require('express');
const router = express.Router();
const { math_handler } = require('../middleware');
const { render } = require('../controllers');

router.get('/number/:val', math_handler.number, render);
router.get('/operator/mul', math_handler.multiply, render);
router.get('/operator/div', math_handler.divide, render);
router.get('/operator/add', math_handler.add, render);
router.get('/operator/sub', math_handler.subtract, render);
router.get('/operator/equal', math_handler.equal, render);
router.get('/operator/point', math_handler.point, render);
router.get('/operator/open', math_handler.open, render);
router.get('/operator/close', math_handler.close, render);
router.get('/operator/percent', math_handler.percent, render);
router.get('/operator/del', math_handler.del, render);

router.get('/', render);

module.exports = router;
