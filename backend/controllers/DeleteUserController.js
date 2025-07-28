import {client} from '../index.js'

export const DeleteUserController = (req, res) => {
    const {id} = req.params;
    const query = 'DELETE FROM users WHERE id=$1'
    const values = [id]

    client.query(query, values, (err, results) => {
        if( results.rows.length > 0){
            res.json("Account Deleted")
        } else {
            res.json({error : "Can't delete this user"})
        }
    })
}