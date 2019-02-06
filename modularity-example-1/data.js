const heroData = function() {

  const data  = 
  [
    {
      "id": 1,
      "name": "A-Bomb",
      "powerstats": {
        "intelligence": 38,
        "strength": 100,
        "speed": 17
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg",
      "publisher": "Marvel Comics"
    },
    {
      "id": 2,
      "name": "Abe Sapien",
      "powerstats": {
        "intelligence": 88,
        "strength": 28,
        "speed": 35
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg",
      "publisher": "Dark Horse Comics"
    },
    {
      "id": 3,
      "name": "Abin Sur",
      "powerstats": {
        "intelligence": 50,
        "strength": 90,
        "speed": 53
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg",
      "publisher": "DC Comics"
    },
    {
      "id": 4,
      "name": "Abomination",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 53
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/4-abomination.jpg",
      "publisher": "Marvel Comics"
    },
    {
      "id": 5,
      "name": "Abraxas",
      "powerstats": {
        "intelligence": 88,
        "strength": 63,
        "speed": 83
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/5-abraxas.jpg",
      "publisher": "Marvel Comics"
    },
    {
      "id": 6,
      "name": "Absorbing Man",
      "powerstats": {
        "intelligence": 38,
        "strength": 80,
        "speed": 25
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/6-absorbing-man.jpg",
      "publisher": "Marvel Comics"
    },
    {
      "id": 7,
      "name": "Adam Monroe",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 12
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/7-adam-monroe.jpg",
      "publisher": "NBC - Heroes"
    },
    {
      "id": 8,
      "name": "Adam Strange",
      "powerstats": {
        "intelligence": 69,
        "strength": 10,
        "speed": 33
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/8-adam-strange.jpg",
      "publisher": "DC Comics"
    },
    // {
    //   "id": 10,
    //   "name": "Agent Bob",
    //   "powerstats": {
    //     "intelligence": 10,
    //     "strength": 8,
    //     "speed": 13
    //   },
    //   "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/10-agent-bob.jpg",
    //   "publisher": "Marvel Comics"
    // },
    // {
    //   "id": 11,
    //   "name": "Agent Zero",
    //   "powerstats": {
    //     "intelligence": 75,
    //     "strength": 28,
    //     "speed": 38
    //   },
    //   "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/11-agent-zero.jpg",
    //   "publisher": "Marvel Comics"
    // },
    // {
    //   "id": 12,
    //   "name": "Air-Walker",
    //   "powerstats": {
    //     "intelligence": 50,
    //     "strength": 85,
    //     "speed": 100
    //   },
    //   "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/12-air-walker.jpg",
    //   "publisher": "Marvel Comics"
    // },
    // {
    //   "id": 13,
    //   "name": "Ajax",
    //   "powerstats": {
    //     "intelligence": 56,
    //     "strength": 48,
    //     "speed": 35
    //   },
    //   "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/13-ajax.jpg",
    //   "publisher": "Marvel Comics"
    // },
    {
      "id": 14,
      "name": "Alan Scott",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 23
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/14-alan-scott.jpg",
      "publisher": "DC Comics"
    },
    {
      "id": 15,
      "name": "Alex Mercer",
      "powerstats": {
        "intelligence": 50,
        "strength": 80,
        "speed": 42
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/15-alex-mercer.jpg",
      "publisher": "Wildstorm"
    },
    {
      "id": 17,
      "name": "Alfred Pennyworth",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 17
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/17-alfred-pennyworth.jpg",
      "publisher": "DC Comics"
    },
    {
      "id": 18,
      "name": "Alien",
      "powerstats": {
        "intelligence": 50,
        "strength": 28,
        "speed": 42
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/18-alien.jpg",
      "publisher": "Dark Horse Comics"
    },
    {
      "id": 20,
      "name": "Amazo",
      "powerstats": {
        "intelligence": 63,
        "strength": 100,
        "speed": 83
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/20-amazo.jpg",
      "publisher": "DC Comics"
    },
    {
      "id": 23,
      "name": "Angel",
      "powerstats": {
        "intelligence": 75,
        "strength": 30,
        "speed": 58
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/23-angel.jpg",
      "publisher": "Dark Horse Comics"
    },
    {
      "id": 24,
      "name": "Angel",
      "powerstats": {
        "intelligence": 63,
        "strength": 13,
        "speed": 46
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/24-angel.jpg",
      "publisher": "Archangel"
    },
    // {
    //   "id": 25,
    //   "name": "Angel Dust",
    //   "powerstats": {
    //     "intelligence": 38,
    //     "strength": 55,
    //     "speed": 23
    //   },
    //   "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/25-angel-dust.jpg",
    //   "publisher": "Marvel Comics"
    // },
    {
      "id": 26,
      "name": "Angel Salvadore",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 28
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/26-angel-salvadore.jpg",
      "publisher": "Tempest"
    },
    {
      "id": 28,
      "name": "Animal Man",
      "powerstats": {
        "intelligence": 56,
        "strength": 48,
        "speed": 47
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/28-animal-man.jpg",
      "publisher": "DC Comics"
    },
    // {
    //   "id": 29,
    //   "name": "Annihilus",
    //   "powerstats": {
    //     "intelligence": 75,
    //     "strength": 80,
    //     "speed": 47
    //   },
    //   "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/29-annihilus.jpg",
    //   "publisher": "Marvel Comics"
    // },
    {
      "id": 30,
      "name": "Ant-Man",
      "powerstats": {
        "intelligence": 100,
        "strength": 18,
        "speed": 23
      },
      "image": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/30-ant-man.jpg",
      "publisher": "Giant-Man"
    }
  ];

  return {
    getData() { return data; }
  }
}();


