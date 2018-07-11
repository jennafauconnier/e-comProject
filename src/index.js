import express from 'express';
const app = express();
import 'dotenv/config';
import volleyball from 'volleyball';
import mongoose from 'mongoose';
import path from "path"



const { SERV_PORT, DB_url } = process.env
mongoose.connect(DB_url)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`[MongoDB] connected`);
});


import { productRouter } from '../routes/products'

app.use(express.json())
app.use(volleyball)
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use('/products', productRouter)
app.use('/', (req, res) => {
  res.send('ca marche');
})

app.listen(SERV_PORT, () => {
  console.log(`[APP workin on port : ${SERV_PORT}]`);
});