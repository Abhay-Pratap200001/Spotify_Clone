let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif')

let songs = [
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Salame-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
];

// audioElement.play();/

// Handling Play,pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity = 1;
}else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle')
    masterPlay.classList.add('fa-play-circle')
    gif.style.opacity = 0;

}
});

// listen to events
myProgressBar.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  // updating seekbar
});
