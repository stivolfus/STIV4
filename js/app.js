
import { login, register } from "./auth.js";

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const message = document.getElementById("message");

// Вход
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  message.textContent = "Выполняется вход...";

  try {
    await login(email, password);
    message.textContent = "Добро пожаловать в STIV!";
  } catch (error) {
    message.textContent = "Ошибка входа: " + error.message;
  }
});

// Регистрация
registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  const profile = {
    age: Number(document.getElementById("age").value),
    height: Number(document.getElementById("height").value),
    weight: Number(document.getElementById("weight").value),
    level: document.getElementById("level").value,
    goal: document.getElementById("goal").value
  };

  message.textContent = "Создаём твой профиль...";

  try {
    await register(email, password, username, profile);

    message.textContent =
      "Профиль создан! Проверь почту для подтверждения регистрации.";

    registerForm.reset();

  } catch (error) {
    message.textContent = "Ошибка: " + error.message;
  }
});
