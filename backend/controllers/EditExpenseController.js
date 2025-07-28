import {client} from '../index.js'

export const EditExpenseController = (req, res) => {
    const user_id = req.user && req.user.id;
    const { id } = req.params;
    const {name, amount, category, note } = req.body;
 
    if(!user_id){
       return res.json({message : "Unauthorized access, please log in"})
    }
     
    const query = 'UPDATE expenses SET name = $1, amount = $2, category = $3, note = $4 WHERE id = $5'
    const values = [ name, amount, category, note, id]

    client.query(query, values, (err, results) => {
        if(err){
            res.json({message : err})
        } else {
            res.json({message : "Successfully updated"})
        }
    })
}