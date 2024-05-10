function playAudio(src) {
  console.log('Tentativa de reprodução de áudio:', src);
  const audioPlayer = document.getElementById('audio-player');
  audioPlayer.src = src;
  audioPlayer.style.display = 'block';
  audioPlayer.play();

  const currentCover = document.getElementById('current-cover');
  const currentSong = document.getElementById('current-song');
  const currentArtist = document.getElementById('current-artist');

  // Define a capa, nome da música e artista
  if (src === 'audios/LUIS/Avenged Sevenfold - A Little Piece Of Heaven [Official Music Video](MP3_320K).mp3') {
    currentCover.src = 'https://akamai.sscdn.co/uploadfile/letras/albuns/f/9/b/e/1321.jpg';
    currentSong.textContent = 'A Little Piece Of Heaven';
    currentArtist.textContent = 'Avenged Sevenfold';
} else if (src === 'audios/LUIS/Avenged Sevenfold - Seize The Day [Official Music Video](MP3_320K).mp3') {
    currentCover.src = 'https://m.media-amazon.com/images/I/81wyVyxHcgL._UF1000,1000_QL80_.jpg';
    currentSong.textContent = 'Seize The Day';
    currentArtist.textContent = 'Avenged Sevenfold';
} else if (src === 'audios/LUIS/Falling In Reverse - _Watch The World Burn_(MP3_320K).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b273589d284fd2bc297a71a7e660';
    currentSong.textContent = 'Watch The World Burn';
    currentArtist.textContent = 'Falling In Reverse';
} else if (src === 'audios/LUIS/Metallica - Whiskey In The Jar (Official Music Video)(MP3_320K).mp3') {
    currentCover.src = 'https://upload.wikimedia.org/wikipedia/en/7/74/Metallica_-_Garage_Inc_cover.jpg';
    currentSong.textContent = 'Whiskey In The Jar';
    currentArtist.textContent = 'Metallica';
} else if (src === 'audios/LUIS/Pearl Jam - Black (Official Audio)(MP3_320K).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864';
    currentSong.textContent = 'Black';
    currentArtist.textContent = 'Pearl Jam';
} else if (src === 'audios/LUIS/ROADS UNTRAVELED - Linkin Park (LIVING THINGS)(MP3_320K).mp3') {
    currentCover.src = 'https://cdns-images.dzcdn.net/images/cover/0ce480e7723712dee352c68fdfef2599/350x350.jpg';
    currentSong.textContent = 'Roads Untraveled';
    currentArtist.textContent = 'Linkin Park';
} else if (src === 'audios/LUIS/Slipknot - Snuff [OFFICIAL VIDEO] [HD](MP3_320K).mp3') {
    currentCover.src = 'https://upload.wikimedia.org/wikipedia/pt/e/e4/SlipknotAllHopeIsGoneCapa.jpg';
    currentSong.textContent = 'Snuff';
    currentArtist.textContent = 'Slipknot';
} else if (src === 'audios/LUIS/Slipknot - Vermilion Pt. 2 [OFFICIAL VIDEO] [HD](MP3_320K).mp3') {
    currentCover.src = 'https://upload.wikimedia.org/wikipedia/pt/e/e4/SlipknotAllHopeIsGoneCapa.jpg';
    currentSong.textContent = 'Vermilion Pt. 2';
    currentArtist.textContent = 'Slipknot';
} else if (src === 'audios/LUIS/System Of A Down - Lonely Day (Official HD Video)(MP3_320K).mp3') {
    currentCover.src = 'https://upload.wikimedia.org/wikipedia/pt/5/50/220px-System_Of_A_Down-Hypnotize.jpg';
    currentSong.textContent = 'Lonely Day';
    currentArtist.textContent = 'System Of A Down';
} else if (src === 'audios/LUIS/Victim(MP3_320K).mp3') {
    currentCover.src = 'https://upload.wikimedia.org/wikipedia/pt/2/29/Avenged-Sevenfold-Nightmare.jpg.png';
    currentSong.textContent = 'Victim';
    currentArtist.textContent = 'Avenged Sevenfold';
}

if (src === 'audios/EDUARDO/2. Yunk Vino - Animais [Official Audio].mp3') {
  currentCover.src = 'https://images.genius.com/07d6bc3a40d2eeeaea773e057cf9cabd.1000x1000x1.jpg';
  currentSong.textContent = 'Animais';
  currentArtist.textContent = 'Yunk Vino';
} else if (src === 'audios/EDUARDO/2. Yunk Vino - Espelho (Prod. MATHINVOKER x Sahara).mp3') {
  currentCover.src = 'https://akamai.sscdn.co/uploadfile/letras/albuns/a/2/c/f/2162371711024913.jpg';
  currentSong.textContent = 'Espelho';
  currentArtist.textContent = 'Yunk Vino';
} else if (src === 'audios/EDUARDO/9. Tevito - HERMES feat. Anjo 005.mp3') {
  currentCover.src = 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/af/39/2f/af392f09-070c-d8e3-afeb-cdd11421be56/0726449893101.jpg/600x600bf-60.jpg';
  currentSong.textContent = 'Hermes';
  currentArtist.textContent = 'Tevito feat. Anjo 005';
} else if (src === 'audios/EDUARDO/ABBOT, AKA RASTA, YUNK VINO & KYAN  MEDLEY 2 !THE BOX!.mp3') {
  currentCover.src = 'https://m.media-amazon.com/images/I/412p7J8HDXL._UXNaN_FMjpg_QL85_.jpg';
  currentSong.textContent = 'Medley The Box 2';
  currentArtist.textContent = 'Abbot, Aka Rasta, Yunk Vino e Kyan';
} else if (src === 'audios/EDUARDO/Dope!!!.mp3') {
  currentCover.src = 'https://i.scdn.co/image/ab67616d0000b27321ba926c89e830ef45f81d0d';
  currentSong.textContent = 'Dope!!!';
  currentArtist.textContent = 'Brocasito';
} else if (src === 'audios/EDUARDO/Duzz - _Patrícia_ (prod. Sam) (dir. @tpiresbr).mp3') {
  currentCover.src = 'https://cdns-images.dzcdn.net/images/cover/aca9e0e649df23018b935a708c4a9b9c/500x500.jpg';
  currentSong.textContent = 'Patrícia';
  currentArtist.textContent = 'Duzz';
} else if (src === 'audios/EDUARDO/LOBO-GUARÁ (feat. Duzz, Sobs, Sos & Vk Mac) (beat. @peunubeat) (dir. @tpiresbr).mp3') {
  currentCover.src = 'https://i1.sndcdn.com/artworks-H2rybwHCxikTV7yy-DaEXYA-t500x500.jpg';
  currentSong.textContent = 'Lobo-Guará';
  currentArtist.textContent = 'Duzz, Sobs, Sos & Vk Mac';
} else if (src === 'audios/EDUARDO/Recayd Mob - Click 3X (feat. Derek, N.A.N.A., Dfideliz, Jé Santiago & The Boy) (prod. Neckklace).mp3') {
  currentCover.src = 'https://images.genius.com/3c521ab19b2f1d96cdee7eaa5e984fc9.1000x1000x1.png';
  currentSong.textContent = 'Click 3x';
  currentArtist.textContent = 'Recayd Mob';
} else if (src === 'audios/EDUARDO/RUDIES FLACKO - CALA-BOCA, TRABALHO ft. AKA RASTA.mp3') {
  currentCover.src = 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f9/ed/97/f9ed9782-8847-d025-972d-b01f955d1ea8/197773901570_cover.jpg/1200x1200bb.jpg';
  currentSong.textContent = 'Cala-boca, Trabalho';
  currentArtist.textContent = 'Rudies Flacko & Aka Rasta';
}

  if (src === 'audios/GEAN/Ávine e Matheus Fernandes - Coração Cachorro (Late Coração) [Clipe Oficial].mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2734be609979a2181bd74e8eec5';
    currentSong.textContent = 'Coração Cachorro';
    currentArtist.textContent = 'Ávine e Matheus Fernandes';
  } else if (src === 'audios/GEAN/Die For You ft. Grabbitz __ Official Music Video __ VALORANT Champions 2021.mp3') {
    currentCover.src = 'https://images.genius.com/580d81a058d544f627b3f8ecf3866add.1000x1000x1.png';
    currentSong.textContent = 'Die For You';
    currentArtist.textContent = 'Valorant & Grabbitz';
  } else if (src === 'audios/GEAN/George Henrique e Rodrigo Feat. Marília Mendonça - Vai Lá Em Casa Hoje (Clipe Oficial).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b27355fda9ca329f0e6261834dd4';
    currentSong.textContent = 'Vai Lá Em Casa Hoje';
    currentArtist.textContent = 'George Henrique E Rodrigo feat. Marília Mendonça';
  } else if (src === 'audios/GEAN/Gusttavo Lima - Bloqueado (Buteco In Boston).mp3') {
    currentCover.src = 'data:image/jpeg;base64,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';
    currentSong.textContent = 'Bloqueado';
    currentArtist.textContent = 'Gusttavo Lima';
  } else if (src === 'audios/GEAN/Henrique e Juliano -  ARRANHÃO - DVD Manifesto Musical.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b27345014fbe5ca34ecb25994c57';
    currentSong.textContent = 'Arranhão';
    currentArtist.textContent = 'Henrique & Juliano';
  } else if (src === 'audios/GEAN/Matheus & Kauan - Imagina A Sentada (Ao Vivo Em São Paulo _ 2021).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b273ecd13e4269172fceedf74ae0';
    currentSong.textContent = 'Imagina a Sentada';
    currentArtist.textContent = 'Matheus & Kauan';
  } else if (src === 'audios/GEAN/MC Levin - Ela Me Falou Que Quer Rave - Versão Rave (Vídeo Clipe Oficial) DJ Kaioken e DJ Gege.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b27339b4db53ce10e9814d00f080';
    currentSong.textContent = 'Ela Me Falou Que Quer Rave';
    currentArtist.textContent = 'Mc Levin';
  } else if (src === 'audios/GEAN/PARADA LOUCA (VAI BEBÊ ME PEDE PRA FAZER) - MARI FERNANDEZ & MARCYNHO SENSAÇÃO (CLIPE OFICIAL).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2737a2679c72a3e5626d1289f20';
    currentSong.textContent = 'Parada Louca';
    currentArtist.textContent = 'Mari Fernandez & Marcynho Sensação';
  } else if (src === 'audios/GEAN/VMZ - Plutão.mp3') {
    currentCover.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcynuLxVHJ8dgDYRIkzAlH9-taIWSojHGqXvTt4X1sJA&s';
    currentSong.textContent = 'Plutão';
    currentArtist.textContent = 'VMZ';
  }
  if (src === 'audios/LUCAS/Bob Marley - One Love.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b273ef4e05f6dff96e307b43ecd8';
    currentSong.textContent = 'One Love';
    currentArtist.textContent = 'Bob Marley';
  } else if (src === 'audios/LUCAS/Lucas A.R.T. - AKUMA NO MI [Prod. LionRiddims].mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-FHEWjsGE4IhR-0-t500x500.jpg';
    currentSong.textContent = 'Akuma No Mi';
    currentArtist.textContent = 'Lucas A.R.T.';
  } else if (src === 'audios/LUCAS/Master of Puppets (Remastered).mp3') {
    currentCover.src = 'https://upload.wikimedia.org/wikipedia/pt/4/4d/Master_of_Puppets.jpg';
    currentSong.textContent = 'Master Of Puppets';
    currentArtist.textContent = 'Metallica';
  } else if (src === 'audios/LUCAS/METAMORPHOSIS.mp3') {
    currentCover.src = 'img/https://i.scdn.co/image/ab67616d00001e02b852a616ae3a49a1f6b0f16e.jpg';
    currentSong.textContent = 'Metamorphosis';
    currentArtist.textContent = '';
  } else if (src === 'audios/LUCAS/O Grilo - Serenata Existencialista.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2732416dd9a80eb7769b4af8c34';
    currentSong.textContent = 'Serenata Existencialista';
    currentArtist.textContent = 'O Grilo';
  } else if (src === 'audios/LUCAS/Pequeno Cidadão - O Sol e a Lua.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b273949f0eec6f00d258338ac2a6';
    currentSong.textContent = 'O Sol e a Lua';
    currentArtist.textContent = 'Pequenos Cidadão';
  } else if (src === 'audios/LUCAS/Racionais Mc_s - A Vida é Desafio.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b273497e68476e7062b1bf5ea83f';
    currentSong.textContent = 'A Vida é Desafio';
    currentArtist.textContent = 'Racionais Mc\'s';
  }
  if (src === 'audios/NOEMI/Chris Brown - Sensational feat. Davido & Lojay (Official Audio).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b27316e242d8d25ab66ba4484e48';
    currentSong.textContent = 'Sensational';
    currentArtist.textContent = 'Chris Brown';
} else if (src === 'audios/NOEMI/Don Toliver - Leave The Club (feat. Lil Durk & GloRilla) [Official Audio].mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-5Yvm72ff0lPt-0-t500x500.jpg';
    currentSong.textContent = 'Leave The Club';
    currentArtist.textContent = 'Don Toliver';
} else if (src === 'audios/NOEMI/Don Toliver - Slow Motion (feat. WizKid) [Official Audio].mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-u2gFbN9P6TKV-0-t500x500.jpg';
    currentSong.textContent = 'Slow Motion';
    currentArtist.textContent = 'Don Toliver';
} else if (src === 'audios/NOEMI/Drake - Fair Trade (Audio) ft. Travis Scott.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2737529f737f9811a49f4e04baa';
    currentSong.textContent = 'Fair Trade';
    currentArtist.textContent = 'Drake';
} else if (src === 'audios/NOEMI/Embarrassed - Don Toliver, Travis Scott _ Lyric Video.mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-CmhgCDv2kcsO-0-t500x500.jpg';
    currentSong.textContent = 'Embarassed';
    currentArtist.textContent = 'Don Toliver & Travis Scott';
} else if (src === 'audios/NOEMI/JACKBOYS - GANG GANG feat. Sheck Wes, Don Toliver, Luxury Tax 50 & Cactus Jack (Official).mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-khWFo872r8EH-0-t500x500.jpg';
    currentSong.textContent = 'Gang Gang';
    currentArtist.textContent = 'JackBoys';
} else if (src === 'audios/NOEMI/JACKBOYS, Travis Scott - WHAT TO DO_ (Audio) ft. Don Toliver.mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-khWFo872r8EH-0-t500x500.jpg';
    currentSong.textContent = 'What To Do';
    currentArtist.textContent = 'JackBoys';
} else if (src === 'audios/NOEMI/Private Landing - Don Toliver, Justin Bieber, Future _ Lyric Video.mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-QKeDIFO6XMFs-0-t500x500.jpg';
    currentSong.textContent = 'Private Landing';
    currentArtist.textContent = 'Don Toliver';
}

  if (src === 'audios/PAULINA/B.Y.O.B..mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71';
    currentSong.textContent = 'B.Y.O.B.';
    currentArtist.textContent = 'System of a Down';
  } else if (src === 'audios/PAULINA/Cry Baby.mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-000214334230-va5yyc-t500x500.jpg';
    currentSong.textContent = 'Cry Baby';
    currentArtist.textContent = 'The Neighbourhood';
  } else if (src === 'audios/PAULINA/Do I Wanna Know_.mp3') {
    currentCover.src = 'https://m.media-amazon.com/images/I/71-Y-3usHkL._UF1000,1000_QL80_.jpg';
    currentSong.textContent = 'Do I Wanna Know?';
    currentArtist.textContent = 'Arctic Monkeys';
  } else if (src === 'audios/PAULINA/Haikaiss - Má-Temática LETRA.mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-jYYf91p7YddQ-0-t500x500.jpg';
    currentSong.textContent = 'Má-Temática';
    currentArtist.textContent = 'Haikaiss';
  } else if (src === 'audios/PAULINA/One Direction - Gotta Be You.mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-iumtO6fympTW-0-t500x500.jpg';
    currentSong.textContent = 'Gotta Be You';
    currentArtist.textContent = 'One Direction';
  } else if (src === 'audios/PAULINA/Sam Smith - Too Good At Goodbyes (Lyrics).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b273005cd7d0ae87b081601f6cca';
    currentSong.textContent = 'Too Good At Goodbyes';
    currentArtist.textContent = 'Sam Smith';
  } else if (src === 'audios/PAULINA/Sweater Weather.mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-000214334230-va5yyc-t500x500.jpg';
    currentSong.textContent = 'Sweater Weather';
    currentArtist.textContent = 'The Neighbourhood';
  } else if (src === 'audios/PAULINA/Tavin - Pétalas (Prod. Lerym).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733cdf4a73dc6142ae36311416';
    currentSong.textContent = 'Pétalas';
    currentArtist.textContent = 'Tavin';
  } else if (src === 'audios/PAULINA/The Neighbourhood - Reflections (Official Audio).mp3') {
    currentCover.src = 'https://i1.sndcdn.com/artworks-000214334230-va5yyc-t500x500.jpg';
    currentSong.textContent = 'Reflections';
    currentArtist.textContent = 'The Neighbourhood';
  }
  if (src === 'audios/SALU/Believe.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733a4910d0e28463d5f7617a18';
    currentSong.textContent = 'Believe';
    currentArtist.textContent = '';
  } else if (src === 'audios/SALU/Enough (Demo Version).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733a4910d0e28463d5f7617a18';
    currentSong.textContent = 'Enough (Demo Version)';
    currentArtist.textContent = '';
  } else if (src === 'audios/SALU/First and Ten (Demo Version).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733a4910d0e28463d5f7617a18';
    currentSong.textContent = 'First and Ten (Demo Version)';
    currentArtist.textContent = '';
  } else if (src === 'audios/SALU/Forever.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733a4910d0e28463d5f7617a18';
    currentSong.textContent = 'Forever';
    currentArtist.textContent = '';
  } else if (src === 'audios/SALU/Hardcore Pride.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733a4910d0e28463d5f7617a18';
    currentSong.textContent = 'Hardcore Pride';
    currentArtist.textContent = '';
  } else if (src === 'audios/SALU/Holding On.mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733a4910d0e28463d5f7617a18';
    currentSong.textContent = 'Holding On';
    currentArtist.textContent = '';
  } else if (src === 'audios/SALU/Line of Scrimmage (Demo Version).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733a4910d0e28463d5f7617a18';
    currentSong.textContent = 'Line of Scrimmage (Demo Version)';
    currentArtist.textContent = '';
  } else if (src === 'audios/SALU/Pit of Equality (Demo Version).mp3') {
    currentCover.src = 'https://i.scdn.co/image/ab67616d0000b2733a4910d0e28463d5f7617a18';
    currentSong.textContent = 'Pit of Equality (Demo Version)';
    currentArtist.textContent = '';
  }
  else {
    console.log('Funcionando', src);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Documento carregado');

  const audioPlayer = document.getElementById('audio-player');
  const playPauseButton = document.getElementById('play-pause-button');
  const progressBar = document.getElementById('progress-bar');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  let isPlaying = false;
  let currentTrackIndex = 0;
  // Playlist Luis
const luisPlaylist = [
  'audios/LUIS/Avenged Sevenfold - A Little Piece Of Heaven [Official Music Video](MP3_320K).mp3',
  'audios/LUIS/Avenged Sevenfold - Seize The Day [Official Music Video](MP3_320K).mp3',
  'audios/LUIS/Falling In Reverse - _Watch The World Burn_(MP3_320K).mp3',
  'audios/LUIS/Metallica - Whiskey In The Jar (Official Music Video)(MP3_320K).mp3',
  'audios/LUIS/Pearl Jam - Black (Official Audio)(MP3_320K).mp3',
  'audios/LUIS/ROADS UNTRAVELED - Linkin Park (LIVING THINGS)(MP3_320K).mp3',
  'audios/LUIS/Slipknot - Snuff [OFFICIAL VIDEO] [HD](MP3_320K).mp3',
  'audios/LUIS/Slipknot - Vermilion Pt. 2 [OFFICIAL VIDEO] [HD](MP3_320K).mp3',
  'audios/LUIS/System Of A Down - Lonely Day (Official HD Video)(MP3_320K).mp3',
  'audios/LUIS/Victim(MP3_320K).mp3'
];

// Playlist Salu
const saluPlaylist = [
  'audios/SALU/Believe.mp3',
  'audios/SALU/Enough (Demo Version).mp3',
  'audios/SALU/First and Ten (Demo Version).mp3',
  'audios/SALU/Forever.mp3',
  'audios/SALU/Hardcore Pride.mp3',
  'audios/SALU/Holding On.mp3',
  'audios/SALU/Line of Scrimmage (Demo Version).mp3',
  'audios/SALU/Pit of Equality (Demo Version).mp3'
];

// Playlist Paulina
const paulinaPlaylist = [
  'audios/PAULINA/B.Y.O.B..mp3',
  'audios/PAULINA/Cry Baby.mp3',
  'audios/PAULINA/Do I Wanna Know_.mp3',
  'audios/PAULINA/Haikaiss - Má-Temática LETRA.mp3',
  'audios/PAULINA/One Direction - Gotta Be You.mp3',
  'audios/PAULINA/Sam Smith - Too Good At Goodbyes (Lyrics).mp3',
  'audios/PAULINA/Sweater Weather.mp3',
  'audios/PAULINA/Tavin - Pétalas (Prod. Lerym).mp3',
  'audios/PAULINA/The Neighbourhood - Reflections (Official Audio).mp3'
];

// Playlist Noemi
const noemiPlaylist = [
  'audios/NOEMI/Chris Brown - Sensational feat. Davido & Lojay (Official Audio).mp3',
  'audios/NOEMI/Don Toliver - Leave The Club (feat. Lil Durk & GloRilla) [Official Audio].mp3',
  'audios/NOEMI/Don Toliver - Slow Motion (feat. WizKid) [Official Audio].mp3',
  'audios/NOEMI/Drake - Fair Trade (Audio) ft. Travis Scott.mp3',
  'audios/NOEMI/Embarrassed - Don Toliver, Travis Scott _ Lyric Video.mp3',
  'audios/NOEMI/JACKBOYS - GANG GANG feat. Sheck Wes, Don Toliver, Luxury Tax 50 & Cactus Jack (Official).mp3',
  'audios/NOEMI/JACKBOYS, Travis Scott - WHAT TO DO_ (Audio) ft. Don Toliver.mp3',
  'audios/NOEMI/Private Landing - Don Toliver, Justin Bieber, Future _ Lyric Video.mp3'
];

// Playlist Luccas
const luccasPlaylist = [
  'audios/LUCAS/Bob Marley - One Love.mp3',
  'audios/LUCAS/Lucas A.R.T. - AKUMA NO MI [Prod. LionRiddims].mp3',
  'audios/LUCAS/Master of Puppets (Remastered).mp3',
  'audios/LUCAS/METAMORPHOSIS.mp3',
  'audios/LUCAS/O Grilo - Serenata Existencialista.mp3',
  'audios/LUCAS/Pequeno Cidadão - O Sol e a Lua.mp3',
  'audios/LUCAS/Racionais Mc_s - A Vida é Desafio.mp3'
];

// Playlist Gean
const geanPlaylist = [
  'audios/GEAN/Ávine e Matheus Fernandes - Coração Cachorro (Late Coração) [Clipe Oficial].mp3',
  'audios/GEAN/Die For You ft. Grabbitz __ Official Music Video __ VALORANT Champions 2021.mp3',
  'audios/GEAN/George Henrique e Rodrigo Feat. Marília Mendonça - Vai Lá Em Casa Hoje (Clipe Oficial).mp3',
  'audios/GEAN/Gusttavo Lima - Bloqueado (Buteco In Boston).mp3',
  'audios/GEAN/Henrique e Juliano -  ARRANHÃO - DVD Manifesto Musical.mp3',
  'audios/GEAN/Matheus & Kauan - Imagina A Sentada (Ao Vivo Em São Paulo _ 2021).mp3',
  'audios/GEAN/MC Levin - Ela Me Falou Que Quer Rave - Versão Rave (Vídeo Clipe Oficial) DJ Kaioken e DJ Gege.mp3',
  'audios/GEAN/PARADA LOUCA (VAI BEBÊ ME PEDE PRA FAZER) - MARI FERNANDEZ & MARCYNHO SENSAÇÃO (CLIPE OFICIAL).mp3',
  'audios/GEAN/VMZ - Plutão.mp3'
];

// Playlist Eduardo
const eduardoPlaylist = [
  'audios/EDUARDO/2. Yunk Vino - Animais [Official Audio].mp3',
  'audios/EDUARDO/2. Yunk Vino - Espelho (Prod. MATHINVOKER x Sahara).mp3',
  'audios/EDUARDO/9. Tevito - HERMES feat. Anjo 005.mp3',
  'audios/EDUARDO/ABBOT, AKA RASTA, YUNK VINO & KYAN  MEDLEY 2 !THE BOX!.mp3',
  'audios/EDUARDO/Dope!!!.mp3',
  'audios/EDUARDO/Duzz - _Patrícia_ (prod. Sam) (dir. @tpiresbr).mp3',
  'audios/EDUARDO/LOBO-GUARÁ (feat. Duzz, Sobs, Sos & Vk Mac) (beat. @peunubeat) (dir. @tpiresbr).mp3',
  'audios/EDUARDO/Recayd Mob - Click 3X (feat. Derek, N.A.N.A., Dfideliz, Jé Santiago & MC Igu) [CLIPE OFICIAL].mp3'
];

// Array containing all playlists
let trackList = [
  luisPlaylist,
  saluPlaylist,
  paulinaPlaylist,
  noemiPlaylist,
  luccasPlaylist,
  geanPlaylist,
  eduardoPlaylist
];

  document.addEventListener('keydown', function(event) {
    // Verifica se o código da tecla pressionada é igual a 32 (código ASCII para espaço)
    if (event.keyCode === 32) {
      // Pausa ou retoma a reprodução da música
      if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.innerHTML = '&#9658;'; // Altera o ícone para Play
      } else {
        audioPlayer.play();
        playPauseButton.innerHTML = '&#10074;&#10074;'; // Altera o ícone para Pause
      }
      isPlaying = !isPlaying;
    }
  });
  
  audioPlayer.addEventListener('timeupdate', function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
  });
  
  progressBar.addEventListener('input', function () {
    const seekTime = (audioPlayer.duration / 100) * progressBar.value;
    audioPlayer.currentTime = seekTime;
  });
  
  prevButton.addEventListener('click', function () {
    // Retrocede para a faixa anterior
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    console.log('Faixa anterior. Novo índice:', currentTrackIndex);
    playAudio(trackList[currentTrackIndex]);
  });
  
  nextButton.addEventListener('click', function () {
    // Avança para a próxima faixa
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    console.log('Próxima faixa. Novo índice:', currentTrackIndex);
    playAudio(trackList[currentTrackIndex]);
  })});

  const progressBar = document.getElementById('progress-bar');
  const progressFilled = document.getElementById('progress-filled');
  
  progressBar.addEventListener('input', function() {
      const value = progressBar.value;
      progressFilled.style.width = value + '%';
  });