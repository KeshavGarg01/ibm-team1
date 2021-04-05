import { STUDENT_ASSESSMENTS_FAIL,STUDENT_ASSESSMENTS_REQUEST,STUDENT_ASSESSMENTS_SUCCESS } from '../constants/studentConstants'
import axios from 'axios'



export const studentAssessmentDetails = (co_id,ch_id,tc_id,tp_id) => async(dispatch, getState) => {
    try {
        dispatch({ type: STUDENT_ASSESSMENTS_REQUEST })
        
        const config = {
            header: { 
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/student/studentassessment', {co_id,ch_id,tc_id,tp_id}, config)
        dispatch({ type: STUDENT_ASSESSMENTS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: STUDENT_ASSESSMENTS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}