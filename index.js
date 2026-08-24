import express from "express";
import urlRoutes from "./routes/url.js";
import connectDB from "./connect.js";
const app = express();
const PORT = 8001;

connectDB("mongodb://127.0.0.1:27017/url-shortener");

app.use(express.json());

app.use("/url", urlRoutes);

app.listen(PORT, () => console.log("Server listening at: ", PORT));
