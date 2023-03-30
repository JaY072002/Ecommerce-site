const router = require("express").Router();
const userRouter = require("./user");
const authRouter = require("./auth");
const productRouter = require("./product");
const orderRouter = require("./order");
const cartRouter = require("./cart");

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/cart", cartRouter);

module.exports = router;
