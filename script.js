const songs = [
    { name: "Gurasai-Fulyo Banaima_1974_AD", path: "musics/Gurasai_Fulyo_Banaima__गुराँसै_फुल्यो_वनैमा____1974_AD___Lyrical_Video_With_Guitar_Chords(128k).mp3" },
    
    { name: "Mercedez-Benz-CowWeb", path: "musics/Mercedes_Benz_-_Cobweb___Tuborg_Open_Sessions(128k).mp3" },
    { name: "Saiyaan - Kailash Kher", 
        path: "musics/Saiyyan_-_Kailash_Kher__Paresh_Kamath__Naresh_Kamath___Jhoomo_Re(128k).mp3" },
         {
            name:" Sajni - Arijit Singh, Ram Sampath",
            path: "musics/Sajni__Song___Arijit_Singh,_Ram_Sampath___Laapataa_Ladies____Aamir_Khan_Productions(256k).mp3" },
            {
                name: "Aalas Ka Pedh - The Local Train",
                path:"musics/The_Local_Train_-_Aalas_Ka_Pedh_-_Choo_Lo__Official_Audio_(128k).mp3" },
                { name: "Gurasai-Fulyo Banaima_1974_AD", path: "musics/Gurasai_Fulyo_Banaima__गुराँसै_फुल्यो_वनैमा____1974_AD___Lyrical_Video_With_Guitar_Chords(128k).mp3" },
    
                { name: "Mercedez-Benz-CowWeb", path: "musics/Mercedes_Benz_-_Cobweb___Tuborg_Open_Sessions(128k).mp3" },
                { name: "Saiyaan - Kailash Kher", 
                    path: "musics/Saiyyan_-_Kailash_Kher__Paresh_Kamath__Naresh_Kamath___Jhoomo_Re(128k).mp3" },
                     {
                        name:" Sajni - Arijit Singh, Ram Sampath",
                        path: "musics/Sajni__Song___Arijit_Singh,_Ram_Sampath___Laapataa_Ladies____Aamir_Khan_Productions(256k).mp3" },
                        {
                            name: "Aalas Ka Pedh - The Local Train",
                            path:"musics/The_Local_Train_-_Aalas_Ka_Pedh_-_Choo_Lo__Official_Audio_(128k).mp3" },
            

  ];
  
  const songListElement = document.getElementById("song-list");
  const playBtn = document.querySelector('.songbuttons img[src="play.svg"]');
  const prevBtn = document.querySelector('.songbuttons img[src="previous.svg"]');
  const nextBtn = document.querySelector('.songbuttons img[src="next.svg"]');
  const songInfo = document.querySelector(".songsinfo");
  
  let audio = new Audio();
  let currentSongIndex = 0;
  

  function loadAndPlay(index) {
    currentSongIndex = index;
    audio.src = songs[index].path;
    audio.play();
    songInfo.textContent = `Playing: ${songs[index].name}`;
    updatePlayButton();
  }
  
 
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.classList.add("song-item");
    li.style.cursor = "pointer";
  
    li.addEventListener("click", () => {
      loadAndPlay(index);
    });
  
    songListElement.appendChild(li);
  });
  
  
  playBtn.addEventListener("click", () => {
    if (!audio.src) {
      loadAndPlay(currentSongIndex);
    } else if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    updatePlayButton();
  });
  
 
  nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadAndPlay(currentSongIndex);
  });
  
  prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadAndPlay(currentSongIndex);
  });
  
 
  function updatePlayButton() {
    playBtn.src = audio.paused ? "play.svg" : "pause.svg";
  }
  
  
  audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadAndPlay(currentSongIndex);
  });
  