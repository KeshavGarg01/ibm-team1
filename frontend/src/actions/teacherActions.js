import {TEACHER_COHORT_REQUEST, TEACHER_COHORT_SUCCESS, TEACHER_COHORT_FAIL, TEACHER_COURSES_REQUEST, TEACHER_COURSES_SUCCESS, TEACHER_COURSES_FAIL, TEACHER_SESSIONS_REQUEST, TEACHER_SESSIONS_SUCCESS, TEACHER_SESSIONS_FAIL, TEACHER_SESSION_SECTIONS_REQUEST, TEACHER_SESSION_SECTIONS_SUCCESS, TEACHER_SESSION_SECTIONS_FAIL, TEACHER_ASSESSMENTS_SUCCESS, TEACHER_ASSESSMENTS_REQUEST, TEACHER_ASSESSMENTS_FAIL } from '../constants/teacherConstants'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const cohortDeatils = (tc_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_COHORT_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('api/teachers/cohort', {tc_id}, config)
        dispatch({ type: TEACHER_COHORT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_COHORT_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const courseDetails = (cu_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_COURSES_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/courses', {cu_id}, config)
        dispatch({ type: TEACHER_COURSES_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_COURSES_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const sessionDetails = (co_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_SESSIONS_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/sessions', {co_id}, config)
        dispatch({ type: TEACHER_SESSIONS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_SESSIONS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const sessionSectionDetails = (sp_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_SESSION_SECTIONS_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/sections', {sp_id}, config)
        dispatch({ type: TEACHER_SESSION_SECTIONS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_SESSION_SECTIONS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const assessmentDetails = (co_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: TEACHER_ASSESSMENTS_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/teachers/assessment', {co_id}, config)
        dispatch({ type: TEACHER_ASSESSMENTS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: TEACHER_ASSESSMENTS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const updateAssessmentDetails = (tc_id,tp_id,am_id,co_id) => {

    //const cu_id = useSelector(state=>state.teacherCourses.coursesInfo.CU_id)
    //console.log(cu_id)

        console.log("hiii")
        axios.post('/api/teachers/updateassessments', {tc_id,tp_id,am_id,co_id})
   
}