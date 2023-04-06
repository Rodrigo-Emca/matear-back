import { Article } from "../../models/Article.js"

const controller = {
    getArticles: async (req, res, next) => {
        try {
            let one = await Article.findById(req.params._id)
            return res
            .status(200)
            .json({ 
                product: {
                title: one?.title, 
                _id: one?._id, 
                product_id: one?.product_id, 
                photo: one?.photo,
                }})
        }
        catch(err) {
            next(err)
        }
    }
};

export default controller;