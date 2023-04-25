const pokemonCount = 493;
var pokedex = {};

window.onload = async function() {
    //getPokemon(1);
    let info = document.getElementById('info');
    info.style.background = 'url(img/grass.png) no-repeat';
    info.style.backgroundSize = 'cover';
    for (let i = 1; i <= pokemonCount;i++) {
        await getPokemon(i);

        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = i.toString() + ". "+ pokedex[i]["name"].toUpperCase();
        pokemon.classList.add("pokemon-name");
        pokemon.classList.add(pokedex[i]["type"][0]["type"]["name"]);
        pokemon.addEventListener("click", updatePokemon);
        document.getElementById("lista").append(pokemon);
    }
}

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json();

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["other"]["official-artwork"]["front_default"];

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();

    pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"]

    pokedex[num] = {"name" : pokemonName, "img" : pokemonImg, "type" : pokemonType, "desc" : pokemonDesc}
}

function updatePokemon() {
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];

    let typesDiv = document.getElementById("tipos");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

    document.getElementById("pokemon-description").innerText = pokedex[this.id]["desc"];

    let types = pokedex[this.id]["type"];
    let info = document.getElementById('info');
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]);
        typesDiv.append(type);
    }
    if ((types[0]["type"]["name"].toUpperCase()=='GRASS') || (types[0]["type"]["name"].toUpperCase()=='BUG')||(types[0]["type"]["name"].toUpperCase()=='NORMAL')||(types[0]["type"]["name"].toUpperCase()=='ELECTRIC')||(types[0]["type"]["name"].toUpperCase()=='POISON')||(types[0]["type"]["name"].toUpperCase()=='PSYCHIC')||(types[0]["type"]["name"].toUpperCase()=='FAIRY')) {
        info.style.background = 'url(img/grass.png) no-repeat';
        info.style.backgroundSize = 'cover';
    }
    else if (types[0]["type"]["name"].toUpperCase()=='WATER') {
        info.style.background = 'url(img/water.png) no-repeat';
        info.style.backgroundSize = 'cover';
    }
    else if (types[0]["type"]["name"].toUpperCase()=='FIRE') {
        info.style.background = 'url(img/fire.png) no-repeat';
        info.style.backgroundSize = 'cover';
    }
    else if (types[0]["type"]["name"].toUpperCase()=='ICE') {
        info.style.background = 'url(img/ice.jpg) no-repeat';
        info.style.backgroundSize = 'cover';
    }
    else if ((types[0]["type"]["name"].toUpperCase()=='GROUND')||(types[0]["type"]["name"].toUpperCase()=='ROCK')||(types[0]["type"]["name"].toUpperCase()=='STEEL')) {
        info.style.background = 'url(img/ground.jpg) no-repeat';
        info.style.backgroundSize = 'cover';
    }
    else if (types[0]["type"]["name"].toUpperCase()=='FIGHTING') {
        info.style.background = 'url(img/fighting.png) no-repeat';
        info.style.backgroundSize = 'cover';
    }
    else if ((types[0]["type"]["name"].toUpperCase()=='GHOST')||(types[0]["type"]["name"].toUpperCase()=='DARK')) {
        info.style.background = 'url(img/ghost.png) no-repeat';
        info.style.backgroundSize = 'cover';
    }
    else if ((types[1]["type"]["name"].toUpperCase()=='FLYING')||(types[0]["type"]["name"].toUpperCase()=='DRAGON')) {
        info.style.background = 'url(img/flying.png) no-repeat';
        info.style.backgroundSize = 'cover';
    }
    

    
}

