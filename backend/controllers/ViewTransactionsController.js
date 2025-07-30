import {client} from '../index.js'
export const ViewTransactionsController = (req, res) => {
    const user_id = req.user && req.user.id;
    
   if(!user_id){
    return res.json({error: "Unauthorized access, Please Log in"});
   }
   const query = 'SELECT * FROM transactions WHERE user_id = $1 ';
   const values = [ user_id ];

   client.query(query, values, (err, results)=> {
       if(err){
           res.json({message : err});
       }else{
           res.json({"myTransactions" : results.rows});
       }
   })
}
export const ViewTransactionsIncomeController = (req, res) => {
    const user_id = req.user && req.user.id;
    
   if(!user_id){
    return res.json({error: "Unauthorized access, Please Log in"});
   }
   const query = 'SELECT * FROM transactions WHERE user_id = $1 AND type = $2';
   const values = [ user_id, 'income' ];

   client.query(query, values, (err, results)=> {
       if(err){
           res.json({theError : err});
       }else{
           const amountList = results.rows.map(all => Number(all.amount));
            const totalAmount = amountList.reduce((acc, curr) => acc + curr, 0);
           res.json({"myIncome" : results.rows, totalAmount : totalAmount});
       }
   })
}


export const ViewTransactionsExpenseController = (req, res) => {
    const user_id = req.user && req.user.id;
    
   if(!user_id){
    return res.json({error: "Unauthorized access, Please Log in"});
   }
   const query = 'SELECT * FROM transactions WHERE user_id = $1 AND type = $2';
   const values = [ user_id, 'expense' ];

   client.query(query, values, (err, results)=> {
       if(err){
           res.json({message : err});
       }else{
           const amountList = results.rows.map(all => Number(all.amount));
            const totalAmount = amountList.reduce((acc, curr) => acc + curr, 0);
           res.json({"myExpenses" : results.rows, totalAmount : totalAmount});
       }
   })
}