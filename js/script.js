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
   // Clear all existing modal content
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');
    modalTitle.empty();
    modalBody.empty();

    // Create new content
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img" style="width:50%"> alt=""');
    imageElement.attr('src', pokemon.imageUrl);
    let heightElement = $('<p>' + 'Height : ' + pokemon.height + ' m' + '</p>');
    let weightElement = $(
      '<p>' + 'Weight : ' + pokemon.weight + ' kg' + '</p>'
    );
    let typesElement = $('<p>' + 'Type(s): ' + pokemon.types);

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);

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
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
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

document.getElementById('search-term').addEventListener('input', e => {
  console.log(e)
  let searchTerm = e.target.value;
let buttons = document.querySelectorAll('.pokemon-button')
for(let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  if(button.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
    button.parentNode.style.display = 'inline';
  } else {
    button.parentNode.style.display = 'none';
  }
}
})
