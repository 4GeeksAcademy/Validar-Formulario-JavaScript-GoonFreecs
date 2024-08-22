/* eslint-disable */

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

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
  let submit = document.querySelector("#btnRegister");

  let alertError = document.querySelector("#globalError");

  card.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  cvc.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  amount.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  firstName.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  lastname.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  city.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  state.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  Postalcode.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  message.addEventListener("keyup", e => {
    if (e.target.value === "") {
      btnRegister.classList.add("disabled");
    } else {
      btnRegister.classList.remove("disabled");
    }
  });

  function validar(evento) {
    evento.preventDefault();
    let hasError = false;

    let fbcard = document.querySelector("#CardNumber + .invalid-feedback");
    let fbcvc = document.querySelector("#cvc + .invalid-feedback");
    let fbamount = document.querySelector("#amount + .invalid-feedback");
    let fbfirstName = document.querySelector("#firstName + .invalid-feedback");
    let fblastName = document.querySelector("#lastname + .invalid-feedback");
    let fbcity = document.querySelector("#city + .invalid-feedback");
    let fbPostalcode = document.querySelector(
      "#CPostal-code + .invalid-feedback"
    );
    let fbmessage = document.querySelector("#messege + .invalid-feedback");

    let validcard = /^[0-9]{13,16}$/;
    let validcvc = /^[0-9]$/;
    let validamount = /^[0-9]{4,15}$/;
    let validfirstName = /^[a-zA-Z]$/;
    let validlastname = /^[a-zA-Z]$/;
    let validcity = /^[a-zA-Z]$/;
    let validPostalcode = /^(\d{5}([\-]\d{4})?)$/;
    let validmessage = /^[a-zA-Z0-9.,\s]{2,500}$/;

    if (card.value === "") {
      card.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else if (!validcard.test(card.value)) {
      card.classList.add("is-invalid");
      fbcard.innerHTML = "The Card Number only Numbers";
      hasError = true;
    } else {
      card.classList.remove("is-invalid");
    }

    if (cvc.value === "") {
      cvc.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else if (!validcvc.test(cvc.value)) {
      cvc.classList.add("is-invalid");
      fbcvc.innerHTML = "The cvc Number only numbers";
      hasError = true;
    } else {
      cvc.classList.remove("is-invalid");
    }

    if (amount.value === "") {
      amount.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else if (!validamount.test(amount.value)) {
      amount.classList.add("is-invalid");
      fbamount.innerHTML = "The Amount only numbers";
      hasError = true;
    } else {
      amount.classList.remove("is-invalid");
    }

    if (firstName.value === "") {
      firstName.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else if (!validfirstName.test(cardfirstName.value)) {
      firstName.classList.add("is-invalid");
      fbfirsteName.innerHTML = "The First Name only letters";
      hasError = true;
    } else {
      firstName.classList.remove("is-invalid");
    }

    if (lastname.value === "") {
      lastname.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else if (!validlastname.test(lastname.value)) {
      lastname.classList.add("is-invalid");
      fblastName.innerHTML = "The Last Name is only letters";
      hasError = true;
    } else {
      lastname.classList.remove("is-invalid");
    }

    if (city.value === "") {
      city.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else if (!validcity.test(city.value)) {
      city.classList.add("is-invalid");
      fbcity.innerHTML = "The City is only letters";
      hasError = true;
    } else {
      city.classList.remove("is-invalid");
    }

    if (state.value === "") {
      state.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else {
      state.classList.remove("is-invalid");
    }

    if (Postalcode.value === "") {
      Postalcode.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else if (!validPostalcode.test(Postalcode.value)) {
      Postalcode.classList.add("is-invalid");
      fbPostalcode.innerHTML = "The Postal Code is only numbers";
      hasError = true;
    } else {
      Postalcode.classList.remove("is-invalid");
    }

    /*if (city.value === "") {
    city.classList.add("is-invalid");
  } else {
    city.classList.remove("is-invalid");
  }*/

    if (message.value === "") {
      message.classList.add("is-invalid", "bg-danger-subtle");
      hasError = true;
    } else if (!validmessage.test(message.value)) {
      message.classList.add("is-invalid");
      fbmessage.innerHTML =
        "The message only receives expressions of: Uppercase, Lowercase, semicolons";
      hasError = true;
    } else {
      message.classList.remove("is-invalid");
    }
    if (hasError) {
      alertError.classList.remove("d-none");
      btnRegister.classList.add("disabled");
    } else {
      alertError.classList.add("d-none");
      registerForm.classList.remove("disable");
    }
  }
  let registerForm = document.querySelector("#registerForm");
  registerForm.addEventListener("submit", validar);
};
