import { Product } from "../../models/Product.js";

const controller = {
    getAll: async(req,res,next) => {

        let consultas = {}
    
        let pagination = {
            page: 1, 
            limit: 10
        }
        
        if (req.query.title) {
            consultas.title = new RegExp(req.query.title.trim(),'i')
            pagination.limit = 10
        }
    
        if (req.query.category_id) {
            const categ = req.query.category_id.split(',');
            consultas.category_id = {$in:categ}
            pagination.limit = 10
        } 
        if (req.query.page) {
            pagination.page = req.query.page
        }
        if (req.query.quantity) { 
            pagination.limit = req.query.quantity
        }

        try {
            let all = await Product.find(consultas)
            .select('title category_id cover_photo description price stock')
            .sort({ title: 1})  
            .skip( pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0 )
            .limit( pagination.limit > 0 ? pagination.limit : 0 )
            .populate("category_id", "name -_id")
    
            return res.status(200).json({ 
            success: true,
            message: "All products",
            products: all
            })
    
        }
        catch(err) {
            next(err)
        } 
        }, 
}

export default controller