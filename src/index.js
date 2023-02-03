const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());



const { SignUp, SignIn } = require("./controllers/auth.controller");

const productController = require("./controllers/product.controller");
const favouriteController = require("./controllers/favourite.controller");
const cartController = require("./controllers/cart.controller");
const amountController = require("./controllers/amount.controller");
const couponController = require("./controllers/coupon.controller");
const addressController = require("./controllers/address.controller");
const orderController = require("./controllers/order.controller");

app.post("/signup", SignUp);

app.post("/signin", SignIn);

app.use("/products", productController);

app.use("/favourite", favouriteController);

app.use("/cart", cartController);

app.use("/amount", amountController);

app.use("/coupon", couponController);

app.use("/address", addressController);

app.use("/orders", orderController);
app.get("/",(req,res)=>{
    return res.status(200).send("Hi welcome to E-Kart")
})



module.exports = app;