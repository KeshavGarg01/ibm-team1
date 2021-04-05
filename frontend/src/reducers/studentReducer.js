import {  STUDENT_ASSESSMENTS_SUCCESS,STUDENT_ASSESSMENTS_REQUEST,STUDENT_ASSESSMENTS_FAIL } from '../constants/studentConstants'


export const studentAssessmentsReducer = (state={ AssessmentsInfo: [] }, action) => {
    switch(action.type) {
        case STUDENT_ASSESSMENTS_REQUEST:
            return { loading: true, AssessmentsInfo: [] }
        case STUDENT_ASSESSMENTS_SUCCESS:
            return { loading: false, AssessmentsInfo: action.payload }
        case STUDENT_ASSESSMENTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}