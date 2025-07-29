import {client} from '../index.js'

export const DeleteTransactionController = (req, res) => {
    const user_id = req.user.id;
    const { id } = req.params;

    const query = "DELETE FROM transactions WHERE id = $1";
    const values = [ id ]

    client.query(query, values, (err, results) => {
        if(results.rowCount > 0){
            res.json({message: "Successfully deleted expense"})
        } else {
            res.json({error : err})
        }  
    })
}