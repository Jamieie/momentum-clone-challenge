const logInForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const USER_KEY = "user";


function handleLogIn(event) {
    event.preventDefault();
    const loginInput = logInForm.querySelector("input");
    const userName = loginInput.value;
    localStorage.setItem(USER_KEY, userName);
    paintGreeting(userName)
}

function paintGreeting(name) {
    logInForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello, ${name}!`;
    document.querySelector("#todo-form").classList.remove("hidden");
}


if(localStorage.getItem(USER_KEY)) {
    const savedUser = localStorage.getItem(USER_KEY);
    paintGreeting(savedUser);
} else {
    logInForm.classList.remove("hidden");
}

logInForm.addEventListener("submit", handleLogIn);