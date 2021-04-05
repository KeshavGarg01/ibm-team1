const express = require('express')
const { updateTeacherAssessments,getTeacherCohort, getTeacherCourses, getTeacherSessionPlans, getTeacherSections, getContent,getTeacherAssessments } = require('../controllers/teacherController.js')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/cohort').post(getTeacherCohort)
router.route('/courses').post(getTeacherCourses)
router.route('/sessions').post(getTeacherSessionPlans)
router.route('/sections').post(getTeacherSections)
router.route('/content').post(getContent)
router.route('/assessment').post(getTeacherAssessments)
router.route('/updateassessments').post(updateTeacherAssessments)


module.exports = router