import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        product_id:{ type:mongoose.Types.ObjectId, ref:'products', required:true },
        title: { type:String, required:true },
        photo: { type:Array, required:true },
      
    },{
        timestamps: true
    }
)

export const Article = mongoose.model('articles', schema)