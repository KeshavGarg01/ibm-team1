import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {updateAssessmentDetails} from '../actions/teacherActions'
import {assessmentDetails} from '../actions/teacherActions'
//import {fun} from '../screens/CohortScreen.js'


export const AssessmentScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, role } = userLogin

    const assessmentDetail = useSelector(state => state.assessment)
    const { loading, AssessmentsInfo, error } = assessmentDetail

    const tc_id = useSelector(state=>state.userLogin.userInfo.TC_id)
    const tp_id = useSelector(state=>state.userLogin.userInfo.TP_id)
    //const ch_id = useSelector(state=>state.teacherCourses.TeacherInfo[0].CH_id)
    
    //const co_id = useSelector(state=>state.AssessmentsInfo.CO_id)

    const Getcuid =(tc_id,tp_id,am_id,co_id)=>{
        const cu_id = useSelector(state=>state.teacherCourses.coursesInfo.CU_id)
            console.log(cu_id)
        updateAssessmentDetails(tc_id,tp_id,am_id,co_id)        
    }

    useEffect(()=> {
        if(userInfo && role === 'Teacher') {
            dispatch(assessmentDetails(match.params.id))
        }
        else {
            history.push('/login')
        }
    }, [dispatch, history, match, role, userInfo])


    return (
        <>
        <h1 style={{"text-align": "center"}}>Assessments</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
        <Table striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
        <thead>
            <tr>
                <th>ASSESSMENT NAME</th>
                <th>ASSESSMENT DURATION</th>
            </tr>
        </thead>
        <tbody>
            {AssessmentsInfo.map((key, index) => 
            <tr key={key.AM_id}>
            <td>{key.AM_Name}</td>
            
            {/* <Link to={`/sections/${key.SP_id}`}><td>{key.SP_Name}</td></Link> */}
            <td>{key.AM_Duration === null ?  `${key.AM_Duration}` : key.AM_Duration}</td>
            <td><button onClick={()=>Getcuid(tc_id,tp_id,key.AM_id,key.CO_id)}>unlock</button></td>
          </tr>
          )}
        </tbody>
    </Table> }
    </>
    ) 
}

export default AssessmentScreen


//OnClick