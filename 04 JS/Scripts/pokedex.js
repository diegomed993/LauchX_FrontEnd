

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
            mov1: data.moves[0].move.name,
            mov2: data.moves[1].move.name,
            mov3: data.moves[2].move.name,
          };
        if (data) {
            console.log(data);
            //let pokeImg = data.sprites.front_default;
            //let pokemonName = data.Name;
            pokeImage(pokemon.img);
            Name(pokemon.nombre);
            PokeType(pokemon.tipo);
            StatHP(pokemon.hp);
            StatAtack(pokemon.ataque);
            StatDef(pokemon.defensa);
            StatSpec(pokemon.especial);
            Move1(pokemon.mov1);
            Move2(pokemon.mov2);
            Move3(pokemon.mov3)
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
    poketype.innerHTML = 'Type: <Span> ' + tipo +'</Span>' ;
    
}

const StatHP = (hp) =>{
    var SHP = document.getElementById("hp")
    SHP.innerHTML = 'HP: <span> '+ hp +  '</span>'
    
}
const StatAtack = (hp) =>{
    var SAT = document.getElementById("ataque")
    SAT.innerHTML = 'Attack: <span> '+ hp +  '</span>'
    
}
const StatDef = (hp) =>{
    var SHP = document.getElementById("defensa")
    SHP.innerHTML = 'Deffense: <span> '+ hp +  '</span>'
    
}
const StatSpec = (hp) =>{
    var SHP = document.getElementById("especial")
    SHP.innerHTML = 'Special: <span> '+ hp +  '</span>'
    
}
const Move1 = (hp) =>{
    var SHP = document.getElementById("mov1")
    SHP.innerHTML = 'Movement 1: <span> '+ hp +  '</span>'
    
}
const Move2 = (hp) =>{
    var SHP = document.getElementById("mov2")
    SHP.innerHTML = 'Movement 2: <span> '+ hp +  '</span>'
    
}
const Move3 = (hp) =>{
    var SHP = document.getElementById("mov3")
    SHP.innerHTML = 'Movement 3: <span> '+ hp +  '</span>'
    
}