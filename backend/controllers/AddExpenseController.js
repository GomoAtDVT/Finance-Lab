import {client} from '../index.js'

export const AddExpenseController = (req, res) => {
    const user_id = req.user && req.user.id;
    
    if(!user_id) {
        return res.status(401).json({ error: "Unauthorized access, please log in" });
    }
    const {name, amount, category, note} = req.body;

    const query = 'INSERT INTO expenses (user_id, name, amount, category, note) VALUES ($1, $2, $3, $4, $5)'
    const values = [user_id, name, amount, category, note]
    client.query(query, values, (err, results) => {
        if(!err){
            res.json({message: "expense added successfully"})
        }else {
            res.json({message : err})
        }
    })
}