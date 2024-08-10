let audio_Feeling= new Audio('Feeling.mp3')
setTimeout(()=>{
    audio_Feeling.play()
   
},3000)

setInterval(() => {
    const duration =  audio_Feeling.duration;
    // console.log(duration)
    let totaltime = Math.floor(duration)
    // let minettotal = Math.floor(totaltime / 60)
    // let secondtotal = totaltime % 60


    const currentTime =audio_Feeling.currentTime;
    let current_Time = Math.floor(currentTime)
    console.log(current_Time)
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
    let prossbar = document.getElementsByClassName("color")[0]
    prossbar.style.width = `${progressPercentage}%`
}, 1000);
let songtime = document.getElementsByClassName("songtime")[0]
songtime.addEventListener('click', (event) => {
    let rect = songtime.getBoundingClientRect();
    let offsetX = event.clientX - rect.left;
    let width = rect.width;
    let percentage = offsetX / width;
   audio_Feeling.currentTime = percentage *audio_Feeling.duration;
});
    // }
// })
functionimg1_Feeling.addEventListener('click',()=>{
   audio_Feeling.pause()
    functionimg1_Feeling.style.display="none"
    functionimg2_Feeling.style.display="block"
})
functionimg2_Feeling.addEventListener('click',()=>{
   audio_Feeling.play()
    functionimg2_Feeling.style.display="none"
    functionimg1_Feeling.style.display="block"
})