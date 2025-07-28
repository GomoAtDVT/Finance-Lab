import {client} from '../index.js'

export const EditUserController =  (req, res) => {
    const { id } = req.params;
    const { username, email, password, date_of_birth } = req.body;

    const query = 'UPDATE users SET  username = $1, email = $2, password=$3, date_of_birth=$4 WHERE id=$5'
    const values = [username, email, password, date_of_birth, id]

    client.query(query,values, (err, results) => {
        if(err){
            res.json({message : err})
        } else {
            res.json({message: "profile edited"})
        }
    })
}