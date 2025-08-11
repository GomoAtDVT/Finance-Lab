import {client} from '../index.js'

export const EditTransactionController = (req, res) => {
    const user_id = req.user && req.user.id;
    const { id } = req.params;
    const {name, amount, category } = req.body;
 
    if(!user_id){
       return res.json({message : "Unauthorized access, please log in"})
    }
     
    const query = 'UPDATE transactions SET name = $1, amount = $2, category = $3 WHERE id = $4'
    const values = [ name, amount, category, id]

    client.query(query, values, (err, results) => {
        if(err){
            res.json({message : err})
        } else {
            res.json({message : "Successfully updated"})
        }
    })
}