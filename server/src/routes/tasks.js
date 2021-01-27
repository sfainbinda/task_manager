const express = require('express');
const router = express.Router();

const tasksControllers = require('../controllers/tasks');

router.get('/all', tasksControllers.getTasks);
router.post('/new', tasksControllers.postTask);
router.put('/update/:id', tasksControllers.updateTask);

module.exports = router;