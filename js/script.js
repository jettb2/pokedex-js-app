//Array for Pokemon names, height and type
let repository = [
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

//loop through Pokemon
//for (let i = 0; i < repository.length; i++) {
//writes each Pokemon name on a different line
  /*var element = document.createElement('div')
    document.body.appendChild(element)
      document.write(repository[i].name + ' Height: ' + repository[i].height +'m');
      if (repository[i].height > 4) {
        document.write(' - Wow that\'s a big Pokemon!');
    }
}
*/

for (let i = 0; i < repository.length; i++) {
  if (repository[i].height > 4) {
    document.write("</br>" + repository[i].name + " " + repository[i].height + " -" + "Wow Thats Big");
  } else {
    document.write("</br>" + repository[i].name + " " + repository[i].height);
  }
}
