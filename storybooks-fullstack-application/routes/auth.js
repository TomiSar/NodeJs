const express = require("express");
const passport = require("passport");
const router = express.Router();

// @description Auth with Google
// @route       GET /auth/google
// specify the same layout from login.hbs
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @description Google auth callback
// @route       GET /auth/google/callback
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

module.exports = router;
