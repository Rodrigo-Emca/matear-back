import { Article } from "../../models/Article.js";

const controller = {
    getOne: async (req, res, next) => {
        try {

            let article = await Article.findById({ _id: req.params.id })
            .select('photo title')
            .populate({
                path: 'product_id',
                select: ' title cover_photo description category_id price stock'
            })
            return res.status(200).json({
                success: true,
                message: article
            })
        }
        catch (err) {
            next(err)
        }
    },
}

export default controller