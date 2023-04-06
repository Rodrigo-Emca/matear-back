import express from 'express'
import products from '../controllers/products/create.js'
import schemaProducts from '../schemas/products.js'
import schemaUpdate from '../schemas/productsEdit.js'
import passport from '../middlewares/passport.js'
import validator from '../middlewares/validator.js'
import updateProduct from '../controllers/products/update.js'
// import deleteProduct from '../controllers/products/destroy.js'

let router = express.Router()

const {create} = products
const { update } = updateProduct
// const { destroy } = deleteProduct

router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaProducts), create)

router.put("/:id", passport.authenticate("jwt", { session:false }), validator(schemaUpdate), update)
// router.put("/:id", passport.authenticate("jwt", { session:false }), validator(schemaUpdate), destroy)

export default router