import express from "express";
import {handleUrlShortening, handleGetRedirect} from "../controllers/url.js";

const router = express.Router();

router.route("/").post(handleUrlShortening);

router.route("/:shortId").get(handleGetRedirect);

export default router;