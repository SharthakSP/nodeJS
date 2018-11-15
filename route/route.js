var express = require("express");
var router = express.Router();
var pgController = require("./../controller/file");

router.get('/',pgController.getFunction);

router.post('/post',pgController.postFunction);

module.exports = router;