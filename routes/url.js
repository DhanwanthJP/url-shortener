import express from "express";
import {handleUrlShortening, handleGetRedirect, handleGetAnalytics} from "../controllers/url.js";

const router = express.Router();

router.route("/").post(handleUrlShortening);

router.route("/:shortId").get(handleGetRedirect);

router.route("/analytics/:shortId").get(handleGetAnalytics);

export default router;