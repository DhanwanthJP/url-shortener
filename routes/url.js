import express from "express";
import {handleUrlShortening, handleGetRedirect, handleGetAnalyticsOne} from "../controllers/url.js";

const router = express.Router();

router.route("/").post(handleUrlShortening);

router.route("/:shortId").get(handleGetRedirect);

router.route("/analytics/:shortId").get(handleGetAnalyticsOne);

export default router;