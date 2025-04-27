document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/eventos')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('eventos-container');
        data.forEach(evento => {
          const div = document.createElement('div');
          div.className = 'col-md-6';
          div.innerHTML = `
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${evento.titulo}</h5>
                <p class="card-text">${evento.descripcion}</p>
                <p><strong>Fecha:</strong> ${evento.fecha}</p>
              </div>
            </div>
          `;
          container.appendChild(div);
        });
      });
  });
  