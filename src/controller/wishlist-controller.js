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
    const _id = request.params;
    const showData = response.body;
    Wishlist.findById(_id, showData)
    .then(() => {
        response.send(showData);
        console.log(_id)
    })
    .catch(err => {
        console.log(err)
        response.status(500).send("Deu ruim")
    })
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

// function updateWishlist(reques, response){
//     const id = request.params;
//     const updateData = request.body;

//     Wishlist.findByIdAndUpdate(id, updateData, {new: true})
//     .then(() =>{
//         response.status(200).send({message: "Content Updated"})
//     })
// }

module.exports = {
    getAllWishlists: getAllWishlists,
    getWishlistById: getWishlistById,
    createWishlist: createWishlist,
    // updateWishlist: updateWishlist
}