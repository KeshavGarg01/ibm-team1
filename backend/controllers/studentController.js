const pool = require('../config/db')

const getAssessment = (req, res) => {
    const { tc_id,ch_id,co_id,tp_id } = req.body
    pool.getConnection((err, conn) => {
        if(err) res.status(400).send('Connection Error');
        else {
          let sql = 'SELECT * FROM cohortassessment WHERE TC_id = ? and CH_id=?and TP_id=?, CO_id=?, CA_status="unlocked"'
          
          conn.query(sql, [tc_id,CH_id, TP_id, CO_id], (err, result) => {
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

module.exports = { getAssessment}