const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url).then((response) => {
        response.json().then((pokemon) => {
            console.log(pokemon.name);//bilbasaur
        });
    });
    
}

const getPokemonById2 = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url).then((response) => {
        response.json().then((pokemon) => {
            callback(pokemon.name);
        });
    });
    
}
/*
const getPokemonById3 = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url)
    .then((response) => {
       return response.json()
    })
    .then((pokemon) => {
        callback(pokemon.name)
    });
    
}

const getPokemonById4 = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url)
    .then((response) => response.json())
    .then((pokemon) => callback(pokemon.name))
};
*/

const getPokemonById5 = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.name);
};

module.exports = getPokemonById5;

