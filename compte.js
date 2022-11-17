let fullname = document.getElementById("username");
let address = document.getElementById("password");
let contactForm = document.getElementById("form");

contactForm.addEventListener("submit", function (e) {
  let messageName = [];
  let messageAddress = [];
  if (
    (fullname.value == "Oky" && address.value == "9874")
  ) {
    sessionStorage.setItem("token", "connected");
    e.preventDefault();
    window.location.assign("profil-modification-Oky.html");
  }
  else if (fullname.value == "Okyg" && address.value == "9875") {
    sessionStorage.setItem("token", "connected");
    e.preventDefault();
    window.location.assign("Profil Oky.html");
  }

  else if (fullname.value && address.value) {
    alert("Mauvaises informations");
    e.preventDefault();
    window.location.assign("Acceuil.html");
  }
});