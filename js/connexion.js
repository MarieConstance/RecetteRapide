const form = document.querySelector('.form')
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);
  
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert(`Bienvenue, ${user.name} !`);
      window.location.href = "https://marieconstance.github.io/html/app.html";
    } else {
      alert("Email ou mot de passe incorrect !");
    }
  }
)