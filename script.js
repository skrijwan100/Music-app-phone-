let overtaken_song = document.getElementById("overtaken_song")
let fasla_song = document.getElementById("fasla_song")
let aaj_se_trei_song= document.getElementById("aaj_se_trei_song")
let feeling_song=document.getElementById("feeling_song")
let main = document.getElementsByClassName("main")[0]
let main_play_music = document.getElementsByClassName("main_play_music")[0]
let main_play_music_fasla = document.getElementsByClassName("main_play_music_fasla")[0]
let main_play_music_aaj_se_teri=document.getElementsByClassName("main_play_music_aaj_se_teri")[0]
let main_play_music_Feeling=document.getElementsByClassName("main_play_music_Feeling")[0]
let back = document.getElementById("back")
let audio_overtaken = new Audio('Overtaken.mp3')
let audio_fasla = new Audio('Faasla.mp3')
let audio_aj_se_teri= new Audio('Aaj_Se_Teri.mp3')
let audio_Feeling= new Audio('Feeling.mp3')
let songplay_overtaken = true
let songplay_fasla = true
let songplay_aaj_se_teri = true
let songplay_Feeling = true
let play_overtaken = false
let play_fasla = false
let play_aaj_se_teri = false
let play_Feeling = false
function overtakenvalue() {
    play_overtaken = true
}
function faslavalue() {
    play_fasla = true
    play_overtaken = false
    play_aaj_se_teri= false
}
function aaj_se_terivalue() {
    play_fasla = false
    play_overtaken = false
    play_aaj_se_teri= true
}
function feelingvalue() {
    play_Feeling = true
    play_fasla = false
    play_overtaken = false
    play_aaj_se_teri= false
}

overtaken_song.addEventListener('click', () => {
    audio_aj_se_teri.pause()
    audio_fasla.pause()
    audio_Feeling.pause()
    if (play_overtaken == true) {
        main.style.display = "none";
        music_active.style.display = "block"
        music_inactive.style.display = "none"
        img_blue.style.display = "block"
        img_white.style.display = "none"
        main_play_music.style.display = "block";
        main_play_music_fasla.style.display = "none";
        main_play_music_aaj_se_teri.style.display="none"
        main_play_music_Feeling.style.display="none"
        if (songplay_overtaken) {
            audio_overtaken.play()
        }
        setInterval(() => {
            const duration = audio_overtaken.duration;
            // console.log(duration)
            let totaltime = Math.floor(duration)
            let minettotal = Math.floor(totaltime / 60)
            let secondtotal = totaltime % 60


            const currentTime = audio_overtaken.currentTime;
            let current_Time = Math.floor(currentTime)
            // console.log(current_Time)
            time_strat = document.getElementById("timestrat")
            if (current_Time < 10) {
                time_strat.innerHTML = "0:" + "0" + current_Time
            }
            else if (current_Time < 60) {
                time_strat.innerHTML = "0:" + current_Time
            }
            else {
                let minet_current_Time = Math.floor(current_Time / 60)
                let sceond_current_Time = current_Time % 60
                if (sceond_current_Time < 10) {
                    time_strat.innerHTML = minet_current_Time + ":0" + sceond_current_Time
                }
                else {

                    time_strat.innerHTML = minet_current_Time + ":" + sceond_current_Time
                }

            }
            const timeRemaining = totaltime - current_Time;
            const minutesRemaining = Math.floor(timeRemaining / 60);
            const secondsRemaining = Math.floor(timeRemaining % 60);

            const formattedMinutes = minutesRemaining.toString().padStart(2, '0');
            const formattedSeconds = secondsRemaining.toString().padStart(2, '0');

            // console.log(timeend)
            time_end = document.getElementById("timeend")
            time_end.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
            const progressPercentage = (currentTime / duration) * 100;
            let prossbar = document.getElementsByClassName("color")[0]
            prossbar.style.width = `${progressPercentage}%`
        }, 1000);
        let songtime = document.getElementsByClassName("songtime")[0]
        songtime.addEventListener('click', (event) => {
            let rect = songtime.getBoundingClientRect();
            let offsetX = event.clientX - rect.left;
            let width = rect.width;
            let percentage = offsetX / width;
            audio_overtaken.currentTime = percentage * audio_overtaken.duration;
        });
    }
})
back_overtaken=document.getElementsByClassName("back")[0]
back_overtaken.addEventListener('click', () => {
    main.style.display = "block";
    main_play_music.style.display = "none";
    img_white.style.display = "block"
    img_blue.style.display = "none"
    music_inactive.style.display = "block"
    music_active.style.display = "none"
    favorite_inactive.style.display = "block"
    favorite_active.style.display = "none"
    download_inactive.style.display = "block"
    download_active.style.display = "none"

})
functionimg_puse = document.getElementById("functionimg1")
functionimg_play = document.getElementById("functionimg2")
// console.log(functionimg_puse)
functionimg_puse.addEventListener('click', () => {
    songplay_overtaken = false
    functionimg_puse.style.display = "none"
    functionimg_play.style.display = "block"
    audio_overtaken.pause()
})
functionimg_play.addEventListener('click', () => {
    functionimg_play.style.display = "none"
    functionimg_puse.style.display = "block"
    audio_overtaken.play()
})
img_blue.addEventListener('click', () => {
    main.style.display = "block";
    main_play_music.style.display = "none";
    img_white.style.display = "block"
    img_blue.style.display = "none"
    music_inactive.style.display = "block"
    music_active.style.display = "none"
    favorite_inactive.style.display = "block"
    favorite_active.style.display = "none"
    download_inactive.style.display = "block"
    download_active.style.display = "none"
    main_play_music_fasla.style.display="none"
    main_play_music_aaj_se_teri.style.display="none"
    main_play_music_Feeling.style.display="none"
    
})
music_inactive.addEventListener('click', () => {
    main.style.display = "none";
    if(play_overtaken==true){
        main_play_music.style.display = "block";
    }
    else if(play_fasla==true){
        main_play_music_fasla.style.display="block"
    }
    else if(play_aaj_se_teri==true){
        main_play_music_aaj_se_teri.style.display="block"
    }
    else if(play_Feeling==true){
        main_play_music_Feeling.style.display="block"
    }
    music_inactive.style.display = "none"
    music_active.style.display = "block"
    favorite_inactive.style.display = "block"
    favorite_active.style.display = "none"
    download_inactive.style.display = "block"
    download_active.style.display = "none"
    img_blue.style.display = "block"
    img_white.style.display = "none"
})
favorite_inactive.addEventListener('click', () => {
    favorite_inactive.style.display = "none"
    favorite_active.style.display = "block"
    music_inactive.style.display = "block"
    music_active.style.display = "none"
    download_inactive.style.display = "block"
    download_active.style.display = "none"
    img_blue.style.display = "block"
    img_white.style.display = "none"
})
download_inactive.addEventListener('click', () => {
    download_inactive.style.display = "none"
    download_active.style.display = "block"
    favorite_inactive.style.display = "block"
    favorite_active.style.display = "none"
    music_inactive.style.display = "block"
    music_active.style.display = "none"
    img_blue.style.display = "block"
    img_white.style.display = "none"
})


//loging for fasla song...
fasla_song.addEventListener('click', () => {
    audio_aj_se_teri.pause()
    audio_overtaken.pause()
    audio_Feeling.pause()
    if (play_fasla == true) {
        main.style.display = "none";
        main_play_music.style.display = "none";
        music_active.style.display = "block"
        music_inactive.style.display = "none"
        img_blue.style.display = "block"
        img_white.style.display = "none"
        main_play_music_fasla.style.display = "block";
        main_play_music_aaj_se_teri.style.display="none"
        main_play_music_Feeling.style.display="none"
        if (songplay_fasla) {
            audio_fasla.play()
        }
        setInterval(() => {
            const duration = audio_fasla.duration;
            // console.log(duration)
            let totaltime = Math.floor(duration)
            let minettotal = Math.floor(totaltime / 60)
            let secondtotal = totaltime % 60


            const currentTime = audio_fasla.currentTime;
            let current_Time = Math.floor(currentTime)
            // console.log(current_Time)
            time_strat = document.getElementById("timestrat_fasla")
            if (current_Time < 10) {
                time_strat.innerHTML = "0:" + "0" + current_Time
            }
            else if (current_Time < 60) {
                time_strat.innerHTML = "0:" + current_Time
            }
            else {
                let minet_current_Time = Math.floor(current_Time / 60)
                let sceond_current_Time = current_Time % 60
                if (sceond_current_Time < 10) {
                    time_strat.innerHTML = minet_current_Time + ":0" + sceond_current_Time
                }
                else {

                    time_strat.innerHTML = minet_current_Time + ":" + sceond_current_Time
                }

            }
            const timeRemaining = totaltime - current_Time;
            const minutesRemaining = Math.floor(timeRemaining / 60);
            const secondsRemaining = Math.floor(timeRemaining % 60);

            const formattedMinutes = minutesRemaining.toString().padStart(2, '0');
            const formattedSeconds = secondsRemaining.toString().padStart(2, '0');

            // console.log(timeend)
            time_end = document.getElementById("timeend_fasla")
            time_end.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
            const progressPercentage = (currentTime / duration) * 100;
            let prossbar = document.getElementsByClassName("color")[1]
            prossbar.style.width = `${progressPercentage}%`
        }, 1000);
        let songtime = document.getElementsByClassName("songtime")[1]
        songtime.addEventListener('click', (event) => {
            let rect = songtime.getBoundingClientRect();
            let offsetX = event.clientX - rect.left;
            let width = rect.width;
            let percentage = offsetX / width;
            audio_fasla.currentTime = percentage * audio_fasla.duration;
        });
    }
})
functionimg1_fasla.addEventListener('click',()=>{
    audio_fasla.pause()
    songplay_fasla=false
    functionimg1_fasla.style.display="none"
    functionimg2_fasla.style.display="block"
})
functionimg2_fasla.addEventListener('click',()=>{
    audio_fasla.play()
    functionimg2_fasla.style.display="none"
    functionimg1_fasla.style.display="block"
})
back_fasla=document.getElementsByClassName("back")[1]
back_fasla.addEventListener('click', () => {
    main.style.display = "block";
    main_play_music_fasla.style.display = "none";
    img_white.style.display = "block"
    img_blue.style.display = "none"
    music_inactive.style.display = "block"
    music_active.style.display = "none"
    favorite_inactive.style.display = "block"
    favorite_active.style.display = "none"
    download_inactive.style.display = "block"
    download_active.style.display = "none"

})
// logic for aaj se trei song
aaj_se_trei_song.addEventListener('click',()=>{
    audio_fasla.pause()
    audio_overtaken.pause()
    audio_Feeling.pause()
    if (play_aaj_se_teri == true) {
        main.style.display = "none";
        main_play_music.style.display = "none";
        music_active.style.display = "block"
        music_inactive.style.display = "none"
        img_blue.style.display = "block"
        img_white.style.display = "none"
        main_play_music_fasla.style.display = "none";
        main_play_music_aaj_se_teri.style.display="block"
        main_play_music_Feeling.style.display="none"
        if (songplay_aaj_se_teri) {
            audio_aj_se_teri.play()
        }
        setInterval(() => {
            const duration = audio_aj_se_teri.duration;
            // console.log(duration)
            let totaltime = Math.floor(duration)
            // let minettotal = Math.floor(totaltime / 60)
            // let secondtotal = totaltime % 60
        
        
            const currentTime = audio_aj_se_teri.currentTime;
            let current_Time = Math.floor(currentTime)
            // console.log(current_Time)
            time_strat = document.getElementById("timestrat_aaj_se_teri")
            if (current_Time < 10) {
                time_strat.innerHTML = "0:" + "0" + current_Time
            }
            else if (current_Time < 60) {
                time_strat.innerHTML = "0:" + current_Time
            }
            else {
                let minet_current_Time = Math.floor(current_Time / 60)
                let sceond_current_Time = current_Time % 60
                if (sceond_current_Time < 10) {
                    time_strat.innerHTML = minet_current_Time + ":0" + sceond_current_Time
                }
                else {
        
                    time_strat.innerHTML = minet_current_Time + ":" + sceond_current_Time
                }
        
            }
            const timeRemaining = totaltime - current_Time;
            const minutesRemaining = Math.floor(timeRemaining / 60);
            const secondsRemaining = Math.floor(timeRemaining % 60);
        
            const formattedMinutes = minutesRemaining.toString().padStart(2, '0');
            const formattedSeconds = secondsRemaining.toString().padStart(2, '0');
        
            // console.log(timeend)
            time_end = document.getElementById("timeend_aaj_se_teri")
            time_end.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
            const progressPercentage = (currentTime / duration) * 100;
            let prossbar = document.getElementsByClassName("color")[2]
            prossbar.style.width = `${progressPercentage}%`
        }, 1000);
        let songtime = document.getElementsByClassName("songtime")[2]
        songtime.addEventListener('click', (event) => {
            let rect = songtime.getBoundingClientRect();
            let offsetX = event.clientX - rect.left;
            let width = rect.width;
            let percentage = offsetX / width;
            audio_aj_se_teri.currentTime = percentage * audio_aj_se_teri.duration;
        });
        
    }
})

functionimg1_aaj_se_teri.addEventListener('click',()=>{
    audio_aj_se_teri.pause()
    songplay_aaj_se_teri = false
    functionimg1_aaj_se_teri.style.display="none"
    functionimg2_aaj_se_teri.style.display="block"
})
functionimg2_aaj_se_teri.addEventListener('click',()=>{
    audio_aj_se_teri.play()
    functionimg2_aaj_se_teri.style.display="none"
    functionimg1_aaj_se_teri.style.display="block"
})
back_aaj_se_teri=document.getElementsByClassName("back")[2]
back_aaj_se_teri.addEventListener('click', () => {
    main.style.display = "block";
    main_play_music_fasla.style.display = "none";
    main_play_music_aaj_se_teri.style.display = "none";
    img_white.style.display = "block"
    img_blue.style.display = "none"
    music_inactive.style.display = "block"
    music_active.style.display = "none"
    favorite_inactive.style.display = "block"
    favorite_active.style.display = "none"
    download_inactive.style.display = "block"
    download_active.style.display = "none"

})
// logic for play feeling song
feeling_song.addEventListener('click',()=>{
    audio_aj_se_teri.pause()
    audio_fasla.pause()
    audio_overtaken.pause()
    if (play_Feeling== true) {
        main.style.display = "none";
        music_active.style.display = "block"
        music_inactive.style.display = "none"
        img_blue.style.display = "block"
        img_white.style.display = "none"
        main_play_music.style.display = "none";
        main_play_music_fasla.style.display = "none";
        main_play_music_aaj_se_teri.style.display="none"
        main_play_music_Feeling.style.display="block"
        if (songplay_Feeling) {
            audio_Feeling.play()
        }
        setInterval(() => {
            const duration =  audio_Feeling.duration;
            // console.log(duration)
            let totaltime = Math.floor(duration)
            // let minettotal = Math.floor(totaltime / 60)
            // let secondtotal = totaltime % 60
        
        
            const currentTime =audio_Feeling.currentTime;
            let current_Time = Math.floor(currentTime)
            // console.log(current_Time)
            time_strat = document.getElementById("timestrat_Feeling")
            if (current_Time < 10) {
                time_strat.innerHTML = "0:" + "0" + current_Time
            }
            else if (current_Time < 60) {
                time_strat.innerHTML = "0:" + current_Time
            }
            else {
                let minet_current_Time = Math.floor(current_Time / 60)
                let sceond_current_Time = current_Time % 60
                if (sceond_current_Time < 10) {
                    time_strat.innerHTML = minet_current_Time + ":0" + sceond_current_Time
                }
                else {
        
                    time_strat.innerHTML = minet_current_Time + ":" + sceond_current_Time
                }
        
            }
            const timeRemaining = totaltime - current_Time;
            const minutesRemaining = Math.floor(timeRemaining / 60);
            const secondsRemaining = Math.floor(timeRemaining % 60);
        
            const formattedMinutes = minutesRemaining.toString().padStart(2, '0');
            const formattedSeconds = secondsRemaining.toString().padStart(2, '0');
        
            // console.log(timeend)
            time_end = document.getElementById("timeend_Feeling")
            time_end.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
            const progressPercentage = (currentTime / duration) * 100;
            let prossbar = document.getElementsByClassName("color")[3]
            prossbar.style.width = `${progressPercentage}%`
        }, 1000);
        let songtime = document.getElementsByClassName("songtime")[3]
        songtime.addEventListener('click', (event) => {
            let rect = songtime.getBoundingClientRect();
            let offsetX = event.clientX - rect.left;
            let width = rect.width;
            let percentage = offsetX / width;
           audio_Feeling.currentTime = percentage *audio_Feeling.duration;
        });
      
    }
})
functionimg1_Feeling.addEventListener('click',()=>{
    audio_Feeling.pause()
    songplay_Feeling=false
     functionimg1_Feeling.style.display="none"
     functionimg2_Feeling.style.display="block"
 })
 functionimg2_Feeling.addEventListener('click',()=>{
    audio_Feeling.play()
     functionimg2_Feeling.style.display="none"
     functionimg1_Feeling.style.display="block"
 })
 back_Feeling=document.getElementsByClassName("back")[3]
 back_Feeling.addEventListener('click', () => {
     main.style.display = "block";
     main_play_music_Feeling.style.display = "none";
     img_white.style.display = "block"
     img_blue.style.display = "none"
     music_inactive.style.display = "block"
     music_active.style.display = "none"
     favorite_inactive.style.display = "block"
     favorite_active.style.display = "none"
     download_inactive.style.display = "block"
     download_active.style.display = "none"
 
 })