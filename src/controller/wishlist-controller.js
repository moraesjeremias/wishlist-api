const Wishlist = require('../models/wishlist');

function getAllWishlists(request, response){
    Wishlist.find({})
    .then(wishlist => {
        response.status(200).send(wishlist);
    })
    .catch(err => {
        response.status(500).send({message: "Deu Xablau em nossos servidores"})
    });
    console.log("pegou")
};

function getWishlistById(request, response){
    response.send("Pegou um items")
};

function createWishlist(request, response) {
    const createData = request.body;

    Wishlist.create(createData)
    .then(() =>{
        response.status(201).send({message: "Wishlist created"});
        console.log(createData);
    })
    .catch(err =>{
        console.log(err);
        response.status(500).send({message: "Não consegui criar o item ;/"})
    });
}

module.exports = {
    getAllWishlists: getAllWishlists,
    getWishlistById: getWishlistById,
    createWishlist: createWishlist
}