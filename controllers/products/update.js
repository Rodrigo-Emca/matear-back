import { Product } from "../../models/Product.js";

const controller = {
    
    update: async (req, res, next) => {
        try {
            let { id } = req.params
            let product = await Product.findOneAndUpdate(
                { _id: id },
                req.body,
                { new : true}
            )
            if (product) {
                res.status(200).json({
                    succes: true,
                    response: product
                })
            } else {
                res.status(404).json({
                    success: false,
                    response: "Error obtaining product",
                })
            }
        }
        catch (err) {
            return next()
        }
    }
}

export default controller