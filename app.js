import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import * as path from "path";
import {
  MAX_JSON_SIZE,
  PORT,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
  URL_ENCODED,
  WEB_CACHE,
} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// Web cache validation and conditional requests in Http
app.set("etag", WEB_CACHE);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://imtiazMERN:tiZGmtaBpfMiTSRg@cluster0.ds9evrr.mongodb.net/",
    { autoIndex: true }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// API routes
app.use("/api", router);

// Serve static assets for React front end
app.use(express.static("dist"));

// Serve React front end for all routes not handled by the API
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "app.html"));
});

app.listen(PORT, () => {
  console.log(`MERN-X Server Running ${PORT}`);
});
