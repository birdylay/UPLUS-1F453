const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../../controllers/api');

router.post('/watson', bodyParser.json({}), (req, res, next) => {
  const branchName = req.body.branchName;
  const programType = req.body.programType;
  const time = req.body.time;

  controller.getPrediction(branchName, programType, time).then((score) => {
  	res.send(score);
  	res.status(204).end();
  });
});

module.exports = router;
