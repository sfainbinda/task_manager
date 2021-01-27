const express = require('express');
const router = express.Router();

const meetingsControllers = require('../controllers/meetings');

router.get('/all', meetingsControllers.getMeetings);
router.post('/new', meetingsControllers.postMeeting);
router.put('/update/:id', meetingsControllers.updateMeeting);

module.exports = router;