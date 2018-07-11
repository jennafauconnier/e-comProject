import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {type: String, required:true},
  description: {type: String, required:true},
  price: {type: Number, required:true},
  date: {type: Date, default: Date.now}

})

const Product = mongoose.model('Product', ProductSchema)

export {
  Product
}