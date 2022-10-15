let saveEl = document.getElementById("save-el");
let gecmisBilgi = localStorage.getItem("gecmisBilgi") ?? 0;
let toplamYolcu = document.querySelector("#toplam-el");
let yolcuBilgisi = localStorage.getItem("yolcuBilgisi") ?? 0;
let total = parseInt(localStorage.getItem("totalYolcu") ?? 0);

if (gecmisBilgi !== null) {
  saveEl.textContent = localStorage.getItem("gecmisBilgi");
} else {
  saveEl.textContent = "";
}


toplamYolcu.textContent =  `Toplam yolcu: ${total}`;

let countEl = document.getElementById("count-el");
let count = 0;


function increment() {
  count += 1;
  countEl.textContent = count;
}


function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  localStorage.setItem("gecmisBilgi", saveEl.textContent);

  total += count;
  countEl.textContent = 0;
  count = 0;

  toplamYolcu.textContent = `Toplam yolcu: ${total}`;
  localStorage.setItem("totalYolcu", total);
}
