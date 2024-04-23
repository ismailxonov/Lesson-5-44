const test = document.querySelector("#number");
const main = document.querySelector("body")
let a = Math.floor(Math.random() * 100);
test.innerHTML = a;
test.style.color = "red";
test.style.textAlign = "center";
test.style.marginTop = "250px";
main.style.background = "yellow";