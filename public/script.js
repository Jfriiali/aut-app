document.getElementById("login-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
      document.getElementById("error-message").classList.remove("hidden");
  }
});

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html"; // Redirect to login
}

// For the dashboard page
if (document.body.classList.contains('dashboard')) {
  const token = localStorage.getItem("token");
  if (!token) {
      window.location.href = "login.html"; // Redirect to login if not authenticated
  }
}
