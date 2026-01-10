import { Schema, model, models } from "mongoose";

const MenuItemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    image: { type: String, default: "" },
    category: { type: String, default: "main" },
  },
  { timestamps: true }
);

export default models.MenuItem || model("MenuItem", MenuItemSchema);
