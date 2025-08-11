import {client} from '../index.js'

export const EditUserController =  (req, res) => {
    const { id } = req.params;
    const { username, email, password, date_of_birth, country, city } = req.body;

    const query = 'UPDATE users SET  username = $1,  password=$2, date_of_birth=$3, country=$4, city=$5 WHERE email=$6'
    const values = [username,  password, date_of_birth, country, city, email]

    client.query(query,values, (err, results) => {
        if(err){
            res.json({message : err})
        } else {
            res.json({message: "profile edited"})
        }
    })
}