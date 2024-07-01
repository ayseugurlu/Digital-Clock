const saat = document.querySelector(".saat");
const dakika = document.querySelector(".dakika");
const saniye = document.querySelector(".saniye");

const updateScreen = () => {
  setInterval(ekranaYaz, 1000);
};

const ekranaYaz = () => {
  if (saat.textContent < 10) {
    saat.textContent = "0" + new Date().getHours();
  } else {
    saat.textContent = new Date().getHours();
  }
  if (dakika.textContent < 10) {
    dakika.textContent = "0" + new Date().getMinutes();
  } else {
    dakika.textContent = new Date().getMinutes();
  }
  if (saniye.textContent < 10) {
    saniye.textContent = "0" + new Date().getSeconds();
  } else {
    saniye.textContent = new Date().getSeconds();
  }
};

updateScreen();
