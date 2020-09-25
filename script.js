let plus = document.querySelectorAll(".add");
let btnMoins = document.querySelectorAll(".moins");
let qte = document.querySelectorAll(".quantité");
let price = document.querySelectorAll(".price");
let somme = document.getElementById(".total-price");
let remove = document.querySelectorAll(".close");

for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function () {
    remove[i].parentElement.remove();
    total();
  });
}

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    total();
  });
}
for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", function () {
    qte[i].innerHTML--;
    total();
  });
}

function total() {
  let quantity = document.getElementsByClassName("quantité");
  let price = document.getElementsByClassName("price");
  let somme = 0;
  for (let i = 0; i < price.length; i++) {
    somme = somme + quantity[i].innerHTML * price[i].innerHTML;
  }
  document.getElementById("total-price").innerHTML = somme;
}

let bg = document.querySelector(".heart");

bg.addEventListener("click", () => (bg.style.backgroundColor = "red"));
