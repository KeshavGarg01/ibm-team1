const express = require('express')
const { getAssessments } = require('../controllers/studentController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/studentassessment').post(getAssessments)


module.exports = router