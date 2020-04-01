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
    const _id = request.params._id;
    
    Wishlist.findById(_id)
    .then((data) => {
        console.log(_id);
        console.log(data);
        response.send(data)
    })
    .catch(err => {
        console.log(err)
        response.status(500).send("Deu ruim")
    })
};

function createWishlist(request, response) {
    const createData = request.body;

    Wishlist.create(createData)
    .then((mongoObject) =>{
        console.log(mongoObject);
        response.status(201).send({message: "Wishlist created", objectId: mongoObject._id});
        console.log(createData);
    })
    .catch(err =>{
        console.log(err);
        response.status(500).send({message: "Não consegui criar o item ;/"})
    });
}

// function updateWishlist(request, response){
//     const _id = request.params.id;
//     const updateData = request.body;

//     Wishlist.findByIdAndUpdate(_id, updateData)
//     .then(() =>{
//         response.status(200).send({message: "Content Updated"})
//         console.log(updateData);
//     }).catch(err => {
//         response.status(500).send({message: "Couldn't update your wishlist T-T"})
//     })
// }

module.exports = {
    getAllWishlists: getAllWishlists,
    getWishlistById: getWishlistById,
    createWishlist: createWishlist,
    // updateWishlist: updateWishlist
}