const animes = [
  { 
    title: 'A Silent Voice', type: 'Movie', id: 18, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/1122/96435.jpg',
    author: 'Yoshitoki Oima', year: '2016', score: '8.9',
    synopsis: 'A former class bully reaches out to the deaf girl he once tormented, seeking to make amends for his past actions.'
  },
  { 
    title: 'Akira', type: 'Movie', id: 30, trending: false, 
    img: 'https://myanimelist.net/images/anime/1408/114012.jpg',
    author: 'Katsuhiro Otomo', year: '1988', score: '8.2',
    synopsis: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic.'
  },
  { 
    title: 'Attack on Titan', type: 'TV Show', id: 3, trending: true, 
    img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    author: 'Hajime Isayama', year: '2013', score: '9.1',
    synopsis: 'Humans live behind walls to protect themselves from giant man-eating Titans. One day, the outermost wall is breached.'
  },
  { 
    title: 'Berserk', type: 'TV Show', id: 10, trending: false, 
    img: 'https://myanimelist.net/images/anime/1384/119988.jpg',
    author: 'Kentaro Miura', year: '1997', score: '8.6',
    synopsis: 'Guts, a wandering mercenary, joins the Band of the Hawk and fights alongside their charismatic leader, Griffith.'
  },
  { 
    title: 'Bleach', type: 'TV Show', id: 14, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
    author: 'Tite Kubo', year: '2004', score: '7.9',
    synopsis: 'Ichigo Kurosaki is a teenager who can see ghosts, a talent which leads him to inherit the powers of a Soul Reaper.'
  },
  { 
    title: 'Blue Exorcist', type: 'TV Show', id: 13, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/10/75195.jpg',
    author: 'Kazue Kato', year: '2011', score: '7.5',
    synopsis: 'Rin Okumura discovers he is the son of Satan and decides to become an exorcist to defeat his father.'
  },
  { 
    title: 'Cowboy Bebop', type: 'TV Show', id: 15, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
    author: 'Hajime Yatate', year: '1998', score: '8.8',
    synopsis: 'A group of bounty hunters travel through space in the year 2071, hunting criminals and confronting their pasts.'
  },
  { 
    title: 'Death Note', type: 'TV Show', id: 8, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    author: 'Tsugumi Ohba', year: '2006', score: '8.6',
    synopsis: 'A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name in it.'
  },
  { 
    title: 'Demon Slayer', type: 'TV Show', id: 25, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
    author: 'Koyoharu Gotouge', year: '2019', score: '8.5',
    synopsis: 'Tanjiro Kamado sets out to become a demon slayer after his family is slaughtered and his sister is turned into a demon.'
  },
  { 
    title: 'Devilman Crybaby', type: 'TV Show', id: 12, trending: false, 
    img: 'https://myanimelist.net/images/anime/2/89973.jpg',
    author: 'Go Nagai', year: '2018', score: '7.8',
    synopsis: 'A sensitive boy merges with a demon to fight against an ancient race of demons seeking to destroy humanity.'
  },
  { 
    title: 'Dragon Ball Z', type: 'TV Show', id: 20, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/6/20936.jpg',
    author: 'Akira Toriyama', year: '1989', score: '8.2',
    synopsis: 'Goku and his friends defend Earth against powerful extraterrestrial enemies ranging from space conquerors to androids.'
  },
  { 
    title: 'Erased', type: 'TV Show', id: 6, trending: false, 
    img: 'https://myanimelist.net/images/anime/10/77957.jpg',
    author: 'Kei Sanbe', year: '2016', score: '8.3',
    synopsis: 'Satoru Fujinuma has the ability to travel back in time to prevent tragedies, eventually leading him back to his childhood.'
  },
  { 
    title: "Frieren: Beyond Journey's End", type: 'TV Show', id: 23, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/1015/138006.jpg',
    author: 'Kanehito Yamada', year: '2023', score: '9.4',
    synopsis: 'An elf mage and her companions defeat the Demon King, but she must now navigate a world without them as time passes.'
  },
  { 
    title: 'Fullmetal Alchemist: Brotherhood', type: 'TV Show', id: 26, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
    author: 'Hiromu Arakawa', year: '2009', score: '9.1',
    synopsis: "Two brothers search for the Philosopher's Stone after a failed alchemical ritual leaves them physically scarred."
  },
  { 
    title: 'Grave of the Fireflies', type: 'Movie', id: 7, trending: false, 
    img: 'https://myanimelist.net/images/anime/1485/141208.jpg',
    author: 'Akiyuki Nosaka', year: '1988', score: '8.5',
    synopsis: 'Two siblings struggle to survive in Japan during the final months of World War II.'
  },
  { 
    title: 'Hunter x Hunter', type: 'TV Show', id: 27, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
    author: 'Yoshihiro Togashi', year: '2011', score: '9.0',
    synopsis: 'Young Gon Freecss sets out to become a Hunter and find his father, who abandoned him to pursue his own Hunter career.'
  },
  { 
    title: 'Jujutsu Kaisen', type: 'TV Show', id: 24, trending: true, 
    img: 'https://myanimelist.net/images/anime/1171/109222.jpg',
    author: 'Gege Akutami', year: '2020', score: '8.6',
    synopsis: 'A high school student swallows a cursed finger and becomes the host of a powerful curse, joining a secret group of sorcerers.'
  },
  { 
    title: 'Monster', type: 'TV Show', id: 1, trending: true, 
    img: 'https://cdn.myanimelist.net/images/anime/10/18793.jpg',
    author: 'Naoki Urasawa', year: '2004', score: '9.0',
    synopsis: 'A brilliant neurosurgeon finds his life in chaos after saving a boy who grows up to be a psychopathic killer.'
  },
  { 
    title: 'My Hero Academia', type: 'TV Show', id: 5, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    author: 'Kohei Horikoshi', year: '2016', score: '7.9',
    synopsis: "In a world where almost everyone has superpowers, a powerless boy inherits a legendary power from the world's greatest hero."
  },
  { 
    title: 'Naruto', type: 'TV Show', id: 17, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
    author: 'Masashi Kishimoto', year: '2002', score: '8.0',
    synopsis: 'A young ninja seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.'
  },
  { 
    title: 'Neon Genesis Evangelion', type: 'TV Show', id: 28, trending: false, 
    img: 'https://myanimelist.net/images/anime/1314/108941.jpg',
    author: 'Hideaki Anno', year: '1995', score: '8.3',
    synopsis: 'Teenagers pilot giant biological machines to defend humanity against mysterious beings known as Angels.'
  },
  { 
    title: 'One Piece', type: 'TV Show', id: 11, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/1244/138851.jpg',
    author: 'Eiichiro Oda', year: '1999', score: '8.7',
    synopsis: 'Monkey D. Luffy and his pirate crew search for the ultimate treasure to make him the King of the Pirates.'
  },
  { 
    title: 'One Punch Man', type: 'TV Show', id: 19, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg',
    author: 'One', year: '2015', score: '8.5',
    synopsis: "The world's strongest hero can defeat any enemy with a single punch, but suffers from an existential crisis due to boredom."
  },
  { 
    title: 'Princess Mononoke', type: 'Movie', id: 29, trending: false, 
    img: 'https://myanimelist.net/images/anime/1355/147277.jpg',
    author: 'Hayao Miyazaki', year: '1997', score: '8.7',
    synopsis: "A young prince involved in a struggle between forest gods and the humans who consume the forest's resources."
  },
  { 
    title: 'Seven Deadly Sins', type: 'TV Show', id: 9, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/8/65409.jpg',
    author: 'Nakaba Suzuki', year: '2014', score: '7.7',
    synopsis: 'A princess seeks the help of a group of disbanded knights to reclaim her kingdom from corrupt Holy Knights.'
  },
  { 
    title: 'Solo Leveling', type: 'TV Show', id: 21, trending: true, 
    img: 'https://myanimelist.net/images/anime/1801/142390.jpg',
    author: 'Chugong', year: '2024', score: '8.3',
    synopsis: 'In a world where hunters fight monsters, the weakest hunter is given a second chance and the ability to level up infinitely.'
  },
  { 
    title: 'Spirited Away', type: 'Movie', id: 2, trending: true, 
    img: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
    author: 'Hayao Miyazaki', year: '2001', score: '8.8',
    synopsis: 'A young girl wanders into a world ruled by gods, witches, and spirits where humans are changed into beasts.'
  },
  { 
    title: 'Steins;Gate', type: 'TV Show', id: 16, trending: false, 
    img: 'https://myanimelist.net/images/anime/1935/127974.jpg',
    author: 'Chiyomaru Shikura', year: '2011', score: '9.1',
    synopsis: 'A self-proclaimed mad scientist accidentally discovers a method of sending messages back in time.'
  },
  { 
    title: 'Vinland Saga', type: 'TV Show', id: 22, trending: false, 
    img: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
    author: 'Makoto Yukimura', year: '2019', score: '8.7',
    synopsis: 'Young Thorfinn seeks revenge against the man who killed his father, becoming a hardened warrior in the process.'
  },
  { 
    title: 'Your Name', type: 'Movie', id: 4, trending: true, 
    img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
    author: 'Makoto Shinkai', year: '2016', score: '8.8',
    synopsis: 'Two teenagers discover they are swapping bodies and must find a way to meet across space and time.'
  }
];

export default animes;