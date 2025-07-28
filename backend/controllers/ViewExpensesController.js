import {client} from '../index.js'
export const ViewExpensesController = (req, res) => {
    const user_id = req.user && req.user.id;
    
   if(!user_id){
    return res.json({error: "Unauthorized access, Please Log in"});
   }
   const query = 'SELECT * FROM expenses WHERE user_id = $1';
   const values = [ user_id ];

   client.query(query, values, (err, results)=> {
       if(err){
           res.json({message : err});
       }else{
           const amountList = results.rows.map(all => all.amount)
           let totalAmount = 0;
            for(let i = 0; i > amountList.length; i++){
                totalAmount += amountList[i]
            }
           res.json({"my expenses" : results.rows, totalAmount : totalAmount});
       }
   })
}