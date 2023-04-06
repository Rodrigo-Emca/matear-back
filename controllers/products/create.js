import { Product } from "../../models/Product.js";

const controller = {
    create: async(req,res,next) => {

        try{
            await Product.create(req.body)
            return res.status(200).json({
                success: true,
                message: 'New Product created succesfully',
                data: req.body
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller