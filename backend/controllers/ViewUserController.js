import {client} from '../index.js'

export const ViewUserController = async (req, res) => {
       try{
        const {id} = req.params;
        const query = 'SELECT * FROM users WHERE id=$1'
        const values = [id]
        let result = await client.query(query, values)

        if (result.rows.length > 0){
            res.status(200).json({user : result.rows})
        } else{
            res.status(404).json("bad request User not found")
        }
       }catch(error){
        res.json( error)
       }
}
export const ViewUserByEmailController = async (req, res) => {
       try{
        const id = req.user && req.user.id;
        const query = 'SELECT * FROM users WHERE id = $1'
        const values = [ id ]
        let result = await client.query(query, values)

        if (result.rows.length > 0){
            res.status(200).json({user : result.rows})
        } else{
            res.status(404).json("bad request User not found")
        }
       }catch(error){
        res.json( error)
       }
}
