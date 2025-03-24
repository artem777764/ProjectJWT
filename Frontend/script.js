document
  .getElementById("register-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    const messageEl = document.getElementById("register-message");

    if (response.ok) {
      messageEl.style.color = "green";
      messageEl.textContent = data.message;
    } else {
      messageEl.style.color = "red";
      messageEl.textContent = data.message;
    }
  });

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    const messageEl = document.getElementById("login-message");

    if (response.ok) {
      messageEl.style.color = "green";
      messageEl.textContent = "Вход выполнен успешно!";

      localStorage.setItem("token", data.token);
    } else {
      messageEl.style.color = "red";
      messageEl.textContent = data.message;
    }
  });

document
  .getElementById("microsoft-button")
  .addEventListener("click", function () {
    window.open("microsoft.html", "_blank");
  });