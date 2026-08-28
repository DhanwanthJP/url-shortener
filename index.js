import express from "express";

import urlRoutes from "./routes/url.js";
import analyticRoutes from "./routes/analytics.js";
import staticRoutes from "./routes/staticRouter.js";

import connectDB from "./connect.js";

import path from "path";

const app = express();
const PORT = 8001;

connectDB("mongodb://127.0.0.1:27017/url-shortener");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", staticRoutes);

app.use("/url", urlRoutes);

app.use("/analytics", analyticRoutes);

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
