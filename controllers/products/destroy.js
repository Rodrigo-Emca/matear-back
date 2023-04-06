import { Product } from "../../models/Product.js"

const controller = {

    destroy: async (req, res, next) => {
        try{
            let { id } = req.params
            let dest = await Product.findByIdAndDelete(
                {_id: id}
                )
            if(dest){
                res.status(200).json({
                    succes: true,
                    message: 'Product removed successfully'
                })
            }else{
                res.status(400).json({
                    succes: false,
                    message: 'Could not delete Product'
                })
            }
        }
        catch(error){
            next(error)
        }
    }
}
export default controller