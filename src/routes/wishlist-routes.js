const express = require('express');
const router = express.Router();


const wishlistController = require('../controller/wishlist-controller');

router.get("/wishlist", wishlistController.getAllWishlists);

router.post("/wishlist", wishlistController.createWishlist);

router.get('/wishlist/:_id', wishlistController.getWishlistById);

// router.put('/wishlist/:_id', wishlistController.updateWishlist);


module.exports = router;