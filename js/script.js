//Array for Pokemon names, height and type
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
      return pokemonList;
      }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }


  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list')
    let listItem = document.createElement('li');
    let button = document.createElement('button')
    button.innerText = pokemon.name;
    button.classList.add('button-class')
    listItem.appendChild(button);
    pokemonList.appendChild(listItem)
    button.addEventListener('click', function (showDetails) {
      console.log(pokemon);
    })
  };

function showDetails(pokemon) {
  console.log(pokemon);
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  })



//printArrayDetails();
/*the printArrayDetails below can be used to either print array details again or if there is another array, print those details
inbetween the ()*/
//printArrayDetails();
