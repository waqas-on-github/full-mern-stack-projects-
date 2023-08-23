import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },


    items: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity cannot be less than 1."],
            default: 1,
          },
        },
      ],
      default: [],
    },
    
    coupon: {
      type: Schema.Types.ObjectId,
      ref: "Coupon",
      default: null,
    },
  },

  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
