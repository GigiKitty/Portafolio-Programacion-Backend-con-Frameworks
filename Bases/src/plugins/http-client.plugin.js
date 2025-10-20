//Objeto que conteine la promesas hacia las URL
const httpClientPlugin = {
    get: async (url) => {
        const resp = await fetch(url);
        return await resp.json();
    },
//Este codigo es por si se requiere a futuro:
post: async (url, body) => {},
put: async (url, body) => {},
delete: async (url, body) =>{},
};

module.exports = {
    http: httpClientPlugin, //se agrego el alias
};