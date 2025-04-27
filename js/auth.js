document.querySelector("#login form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
  
    if (usuario === "admin" && contrasena === "1234") {
      alert("Inicio de sesión exitoso (simulado)");
    } else {
      alert("Credenciales incorrectas");
    }
  
    this.reset();
  });
  
