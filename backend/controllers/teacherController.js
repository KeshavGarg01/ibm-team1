const pool = require('../config/db')

const getTeacherCohort = (req, res) => {
    const { tc_id } = req.body
    pool.getConnection((err, conn) => {
        if(err) res.status(400).send('Connection Error');
        else {
          let sql = 'SELECT * FROM Cohort WHERE TC_id = ?'
          
          conn.query(sql, [tc_id], (err, result) => {
              if(err) res.status(400).send('Querry Error');
              else {
                if(result.length > 0) {
                    res.json(result)
                }
                else {
                    res.status(401)
                    res.json({ message: "No Data Found" })
                }
              }
              
            })
            
            
          }
      })
}

const getTeacherCourses = (req, res) => {
  const { cu_id } = req.body
  //const { co_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM Course a INNER JOIN CurriculumDetails b ON a.CO_id=b.CO_id WHERE CU_id = ?;`
        
        conn.query(sql, [cu_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            //conn.release();
          })
          //conn.query('insert into cohorassessment(TC_id)value(?)',[co_id])
        }
    })
}

const getTeacherSessionPlans = (req, res) => {
  const { co_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM SessionPlan WHERE CO_id = ?;`
        
        conn.query(sql, [co_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            
          })
          
        }
    })
}

const getTeacherSections = (req, res) => {
  const { sp_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = "SELECT * FROM SessionSection WHERE SP_id = ?;"
        
        conn.query(sql, [sp_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            conn.release();
          })
        }
    })
}

const getContent = (req, res) => {
  const { ct_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM Content WHERE  CT_id= ?;`
        
        conn.query(sql, [ct_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            conn.release();
          })
        }
    })
}


const getTeacherAssessments = (req, res) => {
  const { co_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM assessment WHERE CO_id = ?;`
        
        conn.query(sql, [co_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            conn.release();
          })
        }
    })
}


const updateTeacherAssessments = (req, res) => {
  const { tc_id,tp_id,am_id,co_id } = req.body
  var ch_id
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        //let sql0='select CH_id from cohort where TC_id=? and TP_id=? and CU_id=(select CU_id from curriculumdetails where CO_id=?)'
         let sql = `insert into cohorassessment (TC_id, TP_id, CA_status,AM_id,CO_id) values(?,?,'Unlocked',?,?);`
        
        // conn.query('select * from cohort;', (err, results) => {
        //   if(err) res.status(400).send('Querry Error');
        //   else {
        //     console.log(req.body)
        //     if(result.length > 0) {
        //         res.json(results)
        //         //console.log(result)
        //         ch_id=results.CH_id
        //     }
        //     else {
        //         res.status(401)
        //         res.json({ message: "No Data Found" })
        //     }
        //   }
          
        // })


        conn.query(sql, [-1,-1,-1,-1,-1], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              console.log(req.body)
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            
          })

        }
    })
}

module.exports = { updateTeacherAssessments, getTeacherCohort, getTeacherCourses, getTeacherSessionPlans, getTeacherSections, getContent, getTeacherAssessments }