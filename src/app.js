/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let card = document.querySelector("#cardNumber");
let cvc = document.querySelector("#cvc");
let amount = document.querySelector("#amount");
let firstName = document.querySelector("#firstName");
let lastname = document.querySelector("#lastname");
let city = document.querySelector("#city");
let state = document.querySelector("#state");
let Postalcode = document.querySelector("#Postal-code");
/*let card = document.querySelector("#cardNumber")*/
let message = document.querySelector("#message");
let submit = document.querySelector(".btn btn-primary");
let alertaError = document.querySelector("#cardNumber");
