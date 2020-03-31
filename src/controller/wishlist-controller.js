function getAllWishlists(request, response){
    response.send("Pegou todos os items")
    console.log("pegou")
};

function getWishlistById(request, response){
    response.send("Pegou um items")
};

module.exports = {
    getAllWishlists: getAllWishlists,
    getWishlistById: getWishlistById
}