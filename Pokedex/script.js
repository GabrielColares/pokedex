const PokemoName = document.querySelector ('.pokemon__name');
const PokemoNumber = document.querySelector (".pokemon__number");
const PokemonImage = document.querySelector (".pokemon__image");

const form = document.querySelector (".form");
const input = document.querySelector (".input__search");
const buttonPrev = document.querySelector (".btn-prev");
const buttonNext = document.querySelector (".btn-next");

let searchPokemon = 1;

const  fetchPokemon = async (pokemon) => {  
    const APIResponce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponce.status === 200){
        const data = await APIResponce.json ();
        return data;
    }


}

const renderPokemon = async (pokemon) => {

    PokemoName.innerHTML = "Loading ...";
    PokemoNumber.innerHTML = "";

    const data = await fetchPokemon(pokemon);

    if (data){
    PokemonImage.style.display = "block"
    PokemoName.innerHTML = data.name;
    PokemoNumber.innerHTML = data.id;
    PokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    
    input.value="";
    searchPokemon = data.id;
    }else {
        PokemonImage.style.display = "none";
        PokemoName.innerHTML = "Not found";
        PokemoNumber.innerHTML = "";
    }
}   

form .addEventListener('submit', (event) => {
    event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener ("click", () =>{
    if (searchPokemon > 1){
    searchPokemon -= 1;
    renderPokemon (searchPokemon);
    }
});

buttonNext.addEventListener ("click", () =>{
    searchPokemon += 1;
    renderPokemon (searchPokemon);
});

renderPokemon (searchPokemon);

