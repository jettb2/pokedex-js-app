let repository = [
  {
    name: ' Bulbasaur',
    height: 0.7,
    type: ['Grass','Poison']
  },
  {
    name: ' Squirtle',
    height: 0.5,
    type: ['Water']
  },
  {
    name: ' Lapras',
    height: 2.5,
    type: ['Ice', 'Water']
  },
  {
    name: ' Palkia',
    height: 4.2,
    type: ['Water', 'Dragon']
  }
];

for (let i = 0; i < repository.length; i++) {
    document.write(repository[i].name + ' Height: ' + repository[i].height +'m');
    if (repository[i].height > 4) {
      document.write(' - Wow that\'s a big Pokemon!');
    }
}
