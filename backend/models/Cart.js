const { Schema } = require("mongoose");

const CartSchema = new Schema(
  {
    userId: { type: String },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number },
      },
    ],
    
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
