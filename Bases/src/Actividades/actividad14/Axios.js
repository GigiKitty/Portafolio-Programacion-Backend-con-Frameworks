const { http } = require("../../plugins");

const getProductById  = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const product = await http.get(url);
    return product.title;
};

module.exports = {
    getProductById ,
};