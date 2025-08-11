import {client} from '../index.js'

export const AddTransactionController = (req, res) => {
    const user_id = req.user && req.user.id;
    
    if(!user_id) {
        return res.status(401).json({ error: "Unauthorized access, please log in" });
    }
    const {amount, type, category, name} = req.body;

    if (!['expense', 'income'].includes(type)) {
        return res.status(400).json({ error: "Transaction type must be 'expense' or 'income'" });
    }

    const query = 'INSERT INTO transactions ( amount, type, category, name, user_id) VALUES ($1, $2, $3, $4, $5)'
    const values = [ amount, type, category, name, user_id]
    client.query(query, values, (err, results) => {
        if(!err){
            res.json({message: "Transaction added successfully"})
        }else {
            res.json({message : err})
        }
    })
}