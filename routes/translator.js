const express = require('express');
const router = express.Router();
const languageService = require('../service/language.service');
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json({translator: [{name: 'Timmy'}]});
});

router.get('/getlang', function(req, res, next) {
  const isoLang= languageService.getLan();
  res.json(isoLang);
});

module.exports = router;
