let fullName = prompt('Adınızı girin')
let myName = document.querySelector('#myName')
if (fullName) {
    myName.innerHTML = `${myName.innerHTML} ${fullName}`
} else {
    myName.innerHTML = `${myName.innerHTML} Guest`
}

let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let days = date.getDay();
    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
        hrs = hrs - 12;

    }
    if (days === 1) {
        days = 'Pazartesi'
    } else if (days === 2) {
        days = 'Salı'
    } else if (days === 3) {
        days = 'Çarşamba'
    } else if (days === 4) {
        days = 'Perşembe'
    } else if (days === 5) {
        days = 'Cuma'
    } else if (days === 6) {
        days = 'Cumartesi'
    } else if (days === 7) {
        days = 'Pazar'
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs}:${days}`;
    document.getElementById("myClock").innerText = time;
    setTimeout(clock, 1000);
};

clock();

