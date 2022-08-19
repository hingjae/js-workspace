const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const header = document.querySelector("header");
const greeting = header.querySelector("h1");
const savedUsername = localStorage.getItem("username");

const USERNAME_KEY = "username";

const handleLogin = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  loginInput.value = "";
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
};

const paintGreeting = (username) => {
  greeting.innerText = `Hello ${username}`;
  loginForm.classList.add("hidden");
};

if (savedUsername === null) {
  loginForm.addEventListener("submit", handleLogin);
} else {
  paintGreeting(savedUsername);
}
