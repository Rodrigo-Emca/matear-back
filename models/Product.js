import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        // author_id: { type: mongoose.Types.ObjectId, ref: 'authors', required: true },
        // company_id: { type: mongoose.Types.ObjectId, ref: 'companies' },
        title: { type: String, required: true },
        cover_photo: { type: String, required: true },
        description: { type: String, required: true },
        category_id: { type: mongoose.Types.ObjectId, ref: 'categories', required: true },
        price: { type: String, require: true },
        stock: { type: Number, require: true },
    }, {
    timestamps: true
}
)

export const Product = mongoose.model('products', schema)
