
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
