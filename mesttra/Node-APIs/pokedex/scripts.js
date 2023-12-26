const listaPokemonsHtml = document.getElementById("pokemons");

const getPokemons = async (name = '') => {

    if(name !== ''){
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        renderOne(data)
        
    }else{
        
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
        const data = await response.json();
        renderAll(data.results)

    }

}

const renderAll = (pokemons) => {
    listaPokemonsHtml.innerHTML = '';
    pokemons.map((pokemon, index) => {
        listaPokemonsHtml.insertAdjacentHTML("beforeend", 
        `<li class="pokemon-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${index + 1}.gif"/>
            <h3>${pokemon.name}</h3>
        </li>`)
    })
}

const renderOne = (pokemon) => {
    console.log(pokemon)
    listaPokemonsHtml.innerHTML = '';
        listaPokemonsHtml.insertAdjacentHTML("beforeend", 
        `<li class="pokemon-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif"/>
            <h3>${pokemon.name}</h3>
            <h4>Peso: ${pokemon.weight}</h4>
            <p> Tipo:
            ${pokemon.types.map(tipoPokemon => `
            ${tipoPokemon.type.name}
            `).join(' / ')}
            </p>
        </li>`)

}

const searchPokemon = (event) => {
    event.preventDefault();
    const text = document.getElementById("buscarInput").value;
    
    getPokemons(text);

}

getPokemons();
