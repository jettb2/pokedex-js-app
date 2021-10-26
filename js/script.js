let pokemonList = [
  {name = 'Bulbasaur', height = 0.7, type = ['Grass','Poison']},
  {name = 'Squirtle', height = 0.5, type = ['Water']},
  {name = 'Lapras', height = 2.5, type = ['Ice', 'Water']},
  {name = 'Palkia', height = 4.2, type = ['Water', 'Dragon']},
]

document.write('<ul>')
for (let i = 0; i < pokemonList.length; i++) {
  document.write('<li>')
  document.write(pokemonList[i].name + );
}
