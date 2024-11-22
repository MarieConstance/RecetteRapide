const form = document.querySelector('.form')
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Utilisateurs enregistrés dans localStorage:", users);
    const userExists = users.find((user) => user.email === email);
  
    if (userExists) {
      alert("Cet email est déjà utilisé !");
      return;
    }
  
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Inscription réussie !");
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
)