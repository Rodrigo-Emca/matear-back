import express from 'express'
import passport from '../middlewares/passport.js'
import validator from '../middlewares/validator.js'
import readArticle from '../controllers/articles/readAll.js'
import readOne from '../controllers/articles/readOne.js'

let router = express.Router()

const {readAll} = readArticle
const {getOne} = readOne
router.get('/', readAll)
router.get('/:id', getOne)

export default router