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

function loadList() {
  return fetch(apiUrl).then(function(response) {
    return response.json();
  }).then(function(json) {
    json.results.forEach(function(item) {
      let pokemon = {
        name: item.name,
        deailtsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function(e) {
    console.error(e)
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function(reponse) {
    return response.json();
  }).then(function(details) {
      item.image = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
  }).catch(function(e) {
      console.error(e);
  });
}

function showDetails(item) {
pokemonRepository.loadDetails(item).then(function()) {
    console.log(item);
  });
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails
};

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});



//printArrayDetails();
/*the printArrayDetails below can be used to either print array details again or if there is another array, print those details
inbetween the ()*/
//printArrayDetails();
