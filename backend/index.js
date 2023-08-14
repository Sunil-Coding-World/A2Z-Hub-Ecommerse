const express = require("express")
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const cors = require('cors');
const productsRouter = require('./routes/Product');
// const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brand');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');





const url = `mongodb+srv://dondeysunil:Sunil%40123@cluster0.zci4ooj.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

//middlewares

server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); // to parse req.body
server.use('/products', productsRouter.router);
// server.use('/categories', categoriesRouter.router)
server.use('/brands', brandsRouter.router)
server.use('/users', usersRouter.router)
server.use('/auth', authRouter.router)
server.use('/cart', cartRouter.router)
server.use('/orders', ordersRouter.router)



server.listen(8000, () => {
    console.log("server is started on port 8000 ")
});