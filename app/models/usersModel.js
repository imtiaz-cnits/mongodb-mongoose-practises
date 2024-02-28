import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    userName: { type: String },
    userImage: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const users = mongoose.model("users", usersSchema);

export default users;
