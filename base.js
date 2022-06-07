 console.log("Welcome to MusicEra");

 let songIndex = 1;
 let audioElement=new Audio('songs/3.mp3');
 let masterPlay=document.getElementById('masterPlay');
 let seekbar=document.getElementById('SeekBar');
 let gif=document.getElementById('gif');
 let songitem=Array.from(document.getElementsByClassName('SongItem'));
 let masterSong=document.getElementById('masterSong');

 let songs =[
     {songName:"Sun_bhi_le", filePath:"songs/1.mp3",coverPath:"covers/kese.hua.jpg"},
     {songName:"Teri_mohobbat", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
     {songName:"One_life", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
     {songName:"tere_mere_darmiya", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
     {songName:"Muskurane_ki_wajah", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
     {songName:"Mori_rakhya", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
     {songName:"Teri_yado_me", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
     {songName:"The_Chinsmokers", filePath:"songs/8.mp3",coverPath:"covers/5.jpg"},
 ]


 // play pause

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].songName;

})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    seekbar.value=progress;
})


seekbar.addEventListener('change',()=>{
    audioElement.currentTime=seekbar.value*audioElement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        masterSong.innerText=songs[songIndex].songName;
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
       })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=1;
    }
    else
    songIndex+=1;

    audioElement.src=`songs/${songIndex}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=8;
    }
    else
    songIndex--;
    
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})