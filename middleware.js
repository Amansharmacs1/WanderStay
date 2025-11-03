const Listing=require("./models/listing");
const review=require("./models/review");
const ExpressError = require("./utils/expressError.js");
const { listingSchema ,reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");

module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body); // flat fields
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
            req.flash("error","you must be logged in to create listing!");
            return res.redirect("/login")
        }
        next();
};

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner=async (req,res,next)=>{
    let { id } = req.params;
     let listing=await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You're not owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.isreviewAuthor=async (req,res,next)=>{
    let { reviewId,id } = req.params;
     let newReview=await Review.findById(reviewId);
    if(!newReview.author.equals(res.locals.currUser._id)){
        req.flash("error","You're not author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};
