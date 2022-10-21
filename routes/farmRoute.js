const express = require('express');
const router = express.Router();

const farms = require('../controllers/farmcontroller');


router.route('/dashboard')
    .get(farms.renderDashboard);


router.route('/newfarm')
    .get(farms.newFarm)
    .post(farms.createFarm);

module.exports = router;