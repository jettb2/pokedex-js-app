//Array for Pokemon names, height and type
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

function printArrayDetails(list) {
//loop through Pokemon
for (let i = 0; i < pokemonList.length; i++) {
//writes each Pokemon name on a different line
  if (pokemonList[i].height > 4) {
    document.write("</br>" + pokemonList[i].name + " " + pokemonList[i].height + " -" + "Wow Thats Big");
  } else {
    document.write("</br>" + pokemonList[i].name + " " + pokemonList[i].height);
    }
  }
}

printArrayDetails();
//printArrayDetails();
