let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
      return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

 let modalContainer = document.querySelector('#modal-container');
  function showModal(pokemon) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;
    titleElement.style.textTransform = 'uppercase';

    let contentElement = document.createElement('p');
    contentElement.innerText = ('Height: ') + pokemon.height;

    let imgElement = document.createElement('img');
    imgElement.src = pokemon.image;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imgElement);
    // modalContainer.appendChild(modal);

    pokemon.types.forEach(item => {
        let contentElement = document.createElement('p');
        contentElement.innerText = ('Type: ') + item.type.name;
        modal.appendChild(contentElement);
    });

    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  function getAll() {
    return pokemonList
  }

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

function addListItem(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list')
  let listItem = document.createElement('li');
  let button = document.createElement('button')
  button.innerText = pokemon.name;
  button.classList.add('pokemon-button');
  listItem.classList.add('group-list-item');
  button.setAttribute('data-target', '#targtModal');
    listItem.appendChild(button);
  pokemonList.appendChild(listItem)
    button.addEventListener('click', function () {
    showDetails(pokemon);
    })
};

function loadList() {
  return fetch(apiUrl).then(function(response) {
    return response.json();
  }).then(function(json) {
    json.results.forEach(function(item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function(e) {
    console.error(e)
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(details) {
      item.image = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
  }).catch(function(e) {
      console.error(e);
  });
}

function showDetails(pokemon) {
loadDetails(pokemon).then(function() {
  showModal(pokemon)
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
