
function updateClock(){

    const greeting = document.getElementById("greeting");
    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (!greeting || !clock || !date) {
        
        return;
    }

    const now = new Date();

    const hari = ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"];
    const bulan = ["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"];

    let jam = now.getHours();
    let minit = String(now.getMinutes()).padStart(2,"0");
    let saat = String(now.getSeconds()).padStart(2,"0");

    let ucapan = "🌙 Selamat Malam";
    if(jam>=5 && jam<12) ucapan="🌅 Selamat Pagi";
    else if(jam>=12 && jam<15) ucapan="☀️ Selamat Tengah Hari";
    else if(jam>=15 && jam<19) ucapan="🌇 Selamat Petang";

    greeting.textContent = ucapan;
    clock.textContent = "🕒 " + jam.toString().padStart(2,"0")+":"+minit+":"+saat;
    date.textContent = "🗓️ " + hari[now.getDay()] + ", " + now.getDate() + " " + bulan[now.getMonth()] + " " + now.getFullYear();
}

updateClock();
setInterval(updateClock,1000);

// ================= COUNTDOWN KEJOHANAN =================

const eventDate = new Date("August 29, 2026 09:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

}, 1000);

function toggleMusic(){

    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if(music.paused){
        music.play();
        btn.innerHTML = "🔊";
    }else{
        music.pause();
        btn.innerHTML = "🔇";
    }

}