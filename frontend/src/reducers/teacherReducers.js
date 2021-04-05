import { TEACHER_COHORT_REQUEST, TEACHER_COHORT_SUCCESS, TEACHER_COHORT_FAIL, TEACHER_RESET, TEACHER_COURSES_REQUEST, TEACHER_COURSES_SUCCESS, TEACHER_COURSES_FAIL, TEACHER_SESSIONS_REQUEST, TEACHER_SESSIONS_SUCCESS, TEACHER_SESSIONS_FAIL, TEACHER_SESSION_SECTIONS_REQUEST, TEACHER_SESSION_SECTIONS_SUCCESS, TEACHER_SESSION_SECTIONS_FAIL,TEACHER_ASSESSMENTS_FAIL, TEACHER_ASSESSMENTS_REQUEST, TEACHER_ASSESSMENTS_SUCCESS  } from '../constants/teacherConstants'

export const teacherCohortReducer = (state={ TeacherInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_COHORT_REQUEST:
            return { loading: true, TeacherInfo: [] }
        case TEACHER_COHORT_SUCCESS:
            return { loading: false, TeacherInfo: action.payload }
        case TEACHER_COHORT_FAIL:
            return { loading: false, error: action.payload }
        case TEACHER_RESET:
            return []
        default:
            return state
    }
}

export const teacherCoursesReducer = (state={ CoursesInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_COURSES_REQUEST:
            return { loading: true, CoursesInfo: [] }
        case TEACHER_COURSES_SUCCESS:
            return { loading: false, CoursesInfo: action.payload }
        case TEACHER_COURSES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const teacherSessionsReducer = (state={ SessionInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_SESSIONS_REQUEST:
            return { loading: true, sessionInfo: [] }
        case TEACHER_SESSIONS_SUCCESS:
            return { loading: false, sessionInfo: action.payload }
        case TEACHER_SESSIONS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const teacherSessionSectionReducer = (state={ SessionSectionInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_SESSION_SECTIONS_REQUEST:
            return { loading: true, SessionSectionInfo: [] }
        case TEACHER_SESSION_SECTIONS_SUCCESS:
            return { loading: false, SessionSectionInfo: action.payload }
        case TEACHER_SESSION_SECTIONS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const teacherAssessmentsReducer = (state={ AssessmentsInfo: [] }, action) => {
    switch(action.type) {
        case TEACHER_ASSESSMENTS_REQUEST:
            return { loading: true, AssessmentsInfo: [] }
        case TEACHER_ASSESSMENTS_SUCCESS:
            return { loading: false, AssessmentsInfo: action.payload }
        case TEACHER_ASSESSMENTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
