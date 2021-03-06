var express = require('express');
var router = express.Router();
import controllerApi = require('../controller/api');

/* POST file-upload */
router.post('/file_upload', async function(req, res, next) {
  try {
    await controllerApi.upload(req);
    res.send('success');
  } catch (err) {
    res.send('error');
  }
});

/* GET list */
router.get('/list', async function(req, res, next) {
  try {
    const result = await controllerApi.getList(req);
    res.send(result);
  } catch (err) {
    res.send('error');
  }
});

module.exports = router;
