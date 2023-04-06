import express from 'express'
import products from '../controllers/products/create.js'
import schemaProducts from '../schemas/products.js'
import passport from '../middlewares/passport.js'
import validator from '../middlewares/validator.js'

let router = express.Router()

const {create} = products

router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaProducts), create)

export default router