function getPokemonImageUrl(url) {
  const pokemonId = url.split('/').slice(-2, -1)[0];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
}

document.addEventListener('DOMContentLoaded', () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon`)
    .then(response => {
      if (response.data && response.data.results.length > 0) {
        const pokemonList = response.data.results;
        addPokemonCards(pokemonList);
      } else {
        console.error('Данные отсутствуют в ответе API или массив данных пуст');
      }
    })
    .catch(error => console.error('Ошибка при получении данных из API:', error));
  
  function addPokemonCards(pokemonList) {
    const content = document.querySelector('.content');

    pokemonList.forEach(pokemon => {
      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add('pokemon-card');

      const pokemonImg = document.createElement('img');
      pokemonImg.className = 'pokemon-img';
      pokemonImg.src = getPokemonImageUrl(pokemon.url);
      pokemonImg.alt = pokemon.name;
      pokemonImg.width = 40;
      pokemonImg.height = 60;

      const pokemonName = document.createElement('p');
      pokemonImg.className = 'pokemon-text';
      pokemonName.textContent = pokemon.name;

      
      
      pokemonCard.appendChild(pokemonImg);
      pokemonCard.appendChild(pokemonName);

      content.appendChild(pokemonCard);
    });
  }
});