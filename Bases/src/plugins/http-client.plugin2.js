const axios = require("axios");

const httpClientPlugin2 ={
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    },

//Este codigo es por si se requiere a futuro
post : async (url, body) => {},
put: async (url, body) => {},
delete: async (url, body) => {},
};

module.exports = {
    http: httpClientPlugin2, 
};