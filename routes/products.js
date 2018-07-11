import express from 'express'
import { Product } from '../models/products'

const productRouter = express.Router()


productRouter.get('/', (req, res) => {
   Product.find({}, (err, products) => {
     if (err) res.send(err)
     res.render('products')
   })
})

productRouter.get('/discount', (req, res) => {
   res.send('ici vous aurez toutes les réductions !')
});

productRouter.post('/add', (req, res) => {
const newProduct = new Product(req.body)
newProduct.save((err,product) => {
  if (err) res.send(err)
  res.json(product)
  res.redirect('/products/')
})
})


export { productRouter }