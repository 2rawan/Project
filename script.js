const container = document.getElementById("container");

const showRegister = document.getElementById("showRegister");

const showLogin = document.getElementById("showLogin");


// SHOW REGISTER

showRegister.addEventListener("click", () => {

    container.classList.add("active");

});


// SHOW LOGIN

showLogin.addEventListener("click", () => {

    container.classList.remove("active");

});