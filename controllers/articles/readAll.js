import { Article } from '../../models/Article.js'

const controller = {
    readAll: async (req, res, next) => {
        try {
            let article = await Article.find({ producto_id: req.params.id })
                .select('photo title')
                .populate({
                    path: 'product_id',
                    select: ' title cover_photo description category_id price stock'
                })
            return res.status(200).json({ article })
        } catch (error) {
            next(error)
        }
    }
}

export default controller