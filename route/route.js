var express = require("express");
var router = express.Router();
var pgController = require("./../controller/file");

router.get('/',pgController.get_all_profile);

router.post('/create',pgController.create_data);

router.get('/get/:id',pgController.get_profile_by_id);

router.put('/get/:id/update',pgController.update_profile);

router.delete('/:id/delete',pgController.delete_profile);

module.exports = router;