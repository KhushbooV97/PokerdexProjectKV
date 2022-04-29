const pokedex = document.getElementById('pokedex');
const fetchPokemon = () => {
    
  for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
			fetch(url)
				.then((res) => {
					return res.json(); 
				})
				.then((data) => {
					console.log(data);
        const pokemon = {
           name: data.name,
			id: data.id,
           image: data.sprites['front_default'],
           type: data.types.map((type) => type.type.name)
		.join(', ')
       };

      displayPokemon(pokemon);
		
   });
};
}
	
const displayPokemon = (Pokemon) => {
    console.log(Pokemon);
    const PokemonHTMLString = 
		
         `
        <li class="card">
           <img class="card-image" src="${Pokemon.image}"/>
           <h2 class="card-title">${Pokemon.id}. ${Pokemon.name}</h2>
           <p class="card-subtitle">Type: ${Pokemon.type}</p>
       </li>
    `  
      
	pokedex.innerHTML += PokemonHTMLString;
};
fetchPokemon();