const play=document.getElementById("play");
const music=document.querySelector("audio");
const img=document.querySelector("img");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const repeat=document.getElementById("repeat");
const shuffle=document.getElementById("shuffle");
let playing=false;

const songs=[
    {
         name:"song-5",
        title:"Why not me?",
        artist:"Enrique Iglesias"
    },
     {
        name:"song-2",
        title:"Jaane na dunga ",
        artist:"Armaan Malik"
     },
     {
       name:"song-3",
        title:"Somebody's Me",
        artist:"Enrique Iglesias"
     },
     {
        name:"song-4",
        title:"Let's talk",
        artist:"Garry Sandhu"
     }, 
     {
         name:"song-1",
        title:"Kyun",
        artist:"Sushant"
     }
]
// for play function
const playMusic=()=>{
   
    playing=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");

}
//for pause function
const pauseMusic=()=>{
   
    playing=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");

}
 play.addEventListener("click",()=>{
    playing?pauseMusic():playMusic();
})
 
//change the music data
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/"+songs.name+".mpeg";
    img.src="images/"+songs.name+".jpg";
}
let index=0;

const nextSong =() => {
    index=(index+1)%songs.length;
    loadSong(songs[index]);
    playMusic();
}
const prevSong=()=>{
    index=(index-1 +songs.length)%songs.length;
    loadSong(songs[index]);
    playMusic();
}
//next
next.addEventListener("click",nextSong);
//prev
prev.addEventListener("click",prevSong);


function shuffl()
{
    index=Math.floor(Math.random()*songs.length);
    loadSong(songs[index]);
    playMusic();
}
shuffle.addEventListener("click",shuffl);

function repea()
{
    loadSong(songs[index]);
    playMusic();
}
repeat.addEventListener("click",repea);