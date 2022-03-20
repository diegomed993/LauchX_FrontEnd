

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Images/pokemon-sad.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        const pokemon = {
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            imgJuego: data.sprites.front_default,
            imgCvg: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            tipo: data.types[0].type.name,
            experiencia: data.base_experience,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat,
          };
        if (data) {
            console.log(data);
            //let pokeImg = data.sprites.front_default;
            //let pokemonName = data.Name;
            pokeImage(pokemon.img);
            Name(pokemon.nombre);
            PokeType(pokemon.tipo)
            console.log(pokemon.img);
            console.log(pokemon.tipo);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const Name = (poke) =>{
    var pokenombre = document.getElementById("poke-name");
    pokenombre.textContent = poke;
    
}

const PokeType = (tipo) =>{
    var poketype = document.getElementById("poke-type")
    poketype.innerHTML = '<Span>Type: </Span>' + tipo;
    
}