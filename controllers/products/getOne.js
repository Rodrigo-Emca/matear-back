import { Product } from "../../models/Product.js";

const controller = {
    getOne: async (req, res, next) => {
        try {
            let one = await Product.findById(req.params._id)
            return res
            .status(200)
            .json({ 
                product: {
                title: one?.title, 
                description: one?.description, 
                cover_photo: one?.cover_photo,
                category: one?.category_id,
                price: one?.price,
                stock: one?.stock,
                }})
        }
        catch(err) {
            next(err)
        }
    },
}

export default controller