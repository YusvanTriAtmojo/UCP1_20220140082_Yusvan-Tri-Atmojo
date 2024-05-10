var now = new Date();
var hours = now.getHours();

var greetings = [
    {
        "waktu": "pagi",
        "greet": "Hallo! Selamat Pagi! 🌈 🌈",
        "hr": hours >= 5 && hours <= 9
    },
    {
        "waktu": "siang",
        "greet": "Selamat Siang! 🌞 🌞",
        "hr": hours >= 10 && hours <= 16
    },
    {
        "waktu": "sore",
        "greet": "Selamat Sore! 🌅 🌅",
        "hr": hours >= 17 && hours <= 19
    },
    {
        "waktu": "malam",
        "greet": "Selamat Malam! 🌃 🌃",
        "hr": hours >= 20 && hours <= 23
    },
    {
        "waktu": "tengah", 
        "greet": "Selamat Malam! waktunya tidur! 🌚 🌚",
        "hr": hours >= 0 && hours <= 4
    }
];

var message = document.getElementById("greeting");
message.innerHTML = greetings.find(el => el.hr).greet;
message.className = greetings.find(el => el.hr).waktu;


function displayTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;

    const clockElement = document.getElementById('displayTime'); 
    clockElement.textContent = timeString; 
}

setInterval(displayTime, 1000); 

