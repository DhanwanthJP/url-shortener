
import express from "express";

import { handleGetAnalyticsAll } from "../controllers/url.js";

const router = express.Router();

router.route("/").get(handleGetAnalyticsAll);

export default router;