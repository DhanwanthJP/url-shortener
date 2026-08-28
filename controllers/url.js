import { nanoid } from "nanoid";
import URL from "../models/url.js";

async function handleUrlShortening(req, res) {
  const redirectUrl = req.body.url;
  //   console.log("Received request body:", req.body.url); // Debugging line
  //   console.log("Received redirectUrl:", redirectUrl); // Debugging line
  if (!redirectUrl) {
    return res.status(400).json({ error: "redirectUrl is required" });
  }
  const shortId = nanoid(8);
  const shortUrl = `short.y/${shortId}`;

  await URL.create({
    shortId: shortId,
    redirectUrl: redirectUrl,
    shortUrl: shortUrl,
    visitHistory: [],
  });

  res.render("home",{id: shortId});
}

async function handleGetRedirect(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({ shortId: shortId }, { $push: { visitHistory: { timestamp: Date.now() } } }, { new: true });
    if (!entry) {
        return res.status(404).json({ error: "URL not found" });
    }
    res.redirect(entry.redirectUrl);
}

async function handleGetAnalyticsOne(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId: shortId });
    if (!entry) {
        return res.status(404).json({ error: "URL not found" });
    }
    res.json({ "Total Visits": entry.visitHistory.length, "Visit History": entry.visitHistory });
}

async function handleGetAnalyticsAll(req, res) {
    const entries = await URL.find();
    res.render("analytics", { entries: entries });
}

export { handleUrlShortening, handleGetRedirect, handleGetAnalyticsOne, handleGetAnalyticsAll };
