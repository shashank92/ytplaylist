var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/playlist/list', function(req, res, next) {
  res.json({
    msg: 'test'
  });
});

module.exports = router;
