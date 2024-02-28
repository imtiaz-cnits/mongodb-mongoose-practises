import mongoose from "mongoose";
const categoriesSchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    categoryImage: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const categories = mongoose.model("categories", categoriesSchema);

export default categories;
