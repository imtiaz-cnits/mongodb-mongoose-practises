import mongoose from "mongoose";
const brandsSchema = new mongoose.Schema(
  {
    brandName: { type: String },
    brandImage: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const brands = mongoose.model("brands", brandsSchema);

export default brands;
