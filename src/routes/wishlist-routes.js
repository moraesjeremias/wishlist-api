const express = require('express');
const router = express.Router();


const wishlistController = require('../controller/wishlist-controller');

router.get("/wishlist", wishlistController.getAllWishlists);

router.post("/wishlist", wishlistController.createWishlist);

router.get('/wishlist/:id', wishlistController.getWishlistById);


module.exports = router;