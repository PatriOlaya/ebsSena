// inscripcion.js

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const evento = params.get("evento");
    document.getElementById("evento").value = evento ? decodeURIComponent(evento) : "Evento no especificado";
  
    document.getElementById("formInscripcion").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const inscripcion = {
        evento: document.getElementById("evento").value,
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        dependencia: document.getElementById("dependencia").value
      };
  
      const inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];
      inscripciones.push(inscripcion);
      localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
  
      document.getElementById("mensaje").innerHTML = `
        <div class="alert alert-success">
          ¡Inscripción guardada exitosamente!
        </div>
      `;
  
      document.getElementById("formInscripcion").reset();
      document.getElementById("evento").value = inscripcion.evento;
    });
  });
  