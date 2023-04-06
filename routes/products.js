import express from 'express'
import products from '../controllers/products/create.js'
import getProducts from '../controllers/products/getAll.js'
import getOneProduct from '../controllers/products/getOne.js'
import schemaProducts from '../schemas/products.js'
import passport from '../middlewares/passport.js'
import validator from '../middlewares/validator.js'
import getArticleFromProduct from '../controllers/products/getArticle.js'

let router = express.Router()

const {create} = products
const {getAll} = getProducts
const {getOne} = getOneProduct
const {getArticles} =  getArticleFromProduct

router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaProducts), create)
router.get('/getProducts', getAll)
router.get('/:_id', getOne)
router.get('/details/:_id', getArticles)
export default router