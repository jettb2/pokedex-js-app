//Array for Pokemon names, height and type
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      type: ['Grass','Poison']
    },
    {
      name: 'Squirtle',
      height: 0.5,
      type: ['Water']
    },
    {
      name: 'Lapras',
      height: 2.5,
      type: ['Ice', 'Water']
    },
    {
      name: 'Palkia',
      height: 4.2,
      type: ['Water', 'Dragon']
    }
];

  function getAll() {
      return pokemonList;
      }

    function add(pokemon) {
      pokemonList.push(pokemon);
    }

  return {
    add: add,
    getAll: getAll
  };

})();

  pokemonRepository.getAll().forEach(function(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list')
    let listItem = document.createElement('li');
    let button = document.createElement('button')
    button.innerText = pokemon.name;
    button.classList.add('arrayButton-class')
    document.querySelector('ul');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem)
  })



//printArrayDetails();
/*the printArrayDetails below can be used to either print array details again or if there is another array, print those details
inbetween the ()*/
//printArrayDetails();
