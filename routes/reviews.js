const express = require("express");
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const router = express.Router({ mergeParams: true });
const {validateReview,isLoggedIn,isreviewAuthor}=require("../middleware.js");

const reviewController=require("../controller/review.js");

//CREATE Review
router.post("/", validateReview,isLoggedIn, wrapAsync(reviewController.createReview));

// DELETE Review
router.delete("/:reviewId",isLoggedIn,isreviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;
