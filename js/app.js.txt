
import { login, register, logout } from "./auth.js";

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await login(email, password);
    message.textContent = "Успешный вход в STIV!";
  } catch (error) {
    message.textContent = error.message;
  }
});

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  try {
    await register(email, password, username);
    message.textContent =
      "Аккаунт создан! Проверь почту для подтверждения регистрации.";
  } catch (error) {
    message.textContent = error.message;
  }
});
