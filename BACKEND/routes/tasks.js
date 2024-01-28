const express = require('express')
const router = express.Router()

const tasksController = require('../controllers/tasksController')

router.post('/', tasksController.createTask )
router.get('/', tasksController.retTasksAll )
router.get('/:id', tasksController.retTaskById )
router.put('/:id', tasksController.updatedTask )
router.delete("/:id", tasksController.deleteTask)

module.exports = router