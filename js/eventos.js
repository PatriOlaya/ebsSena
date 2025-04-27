// eventos.js

document.addEventListener("DOMContentLoaded", function () {
    const listaEventos = document.getElementById("lista-eventos");

    // Modo simulación (true mientras no hay backend conectado)
    const modoSimulacion = true;

    if (modoSimulacion) {
        // Datos simulados
        const eventosSimulados = [
            {
                titulo: "🧘‍♀️ Inteligencia Corporativa",
                fecha: "12 de abril",
                descripcion: "Una sesión para liberar estrés y mejorar la postura."
            },
            {
                titulo: "🧠 Taller de Mindfulness",
                fecha: "15 de abril",
                descripcion: "Aprende técnicas para mejorar tu concentración y reducir ansiedad."
            },
            {
                titulo: "🍎 Nutrición Saludable",
                fecha: "18 de abril",
                descripcion: "Consejos prácticos para una alimentación más balanceada."
            },
            {
                titulo: "🚶‍♂️ Caminata Saludable",
                fecha: "22 de abril",
                descripcion: "Actividad física grupal al aire libre para recargar energía."
            }
        ];

        mostrarEventos(eventosSimulados);
    } else {
        // Cuando tengas el backend
        fetch("https://tuservidor.com/api/eventos")
            .then(response => response.json())
            .then(data => {
                mostrarEventos(data);
            })
            .catch(error => {
                console.error("Error al cargar los eventos:", error);
                listaEventos.innerHTML = "<p>Error al cargar eventos.</p>";
            });
    }

    function mostrarEventos(eventos) {
        if (!eventos || eventos.length === 0) {
            listaEventos.innerHTML = "<p>No hay eventos disponibles.</p>";
            return;
        }

        eventos.forEach(evento => {
            const item = document.createElement("div");
            item.classList.add("evento", "mb-3", "p-3", "bg-light", "rounded", "shadow-sm");
            item.innerHTML = `
                <h5 class="mb-1">${evento.titulo}</h5>
                <small class="text-muted">${evento.fecha}</small>
                <p class="mt-2 mb-0">${evento.descripcion}</p>
            `;
            listaEventos.appendChild(item);
        });
    }
});
