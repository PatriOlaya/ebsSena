document.getElementById('formCertificado')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener los valores del formulario de solicitud de certificado
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const evento = document.getElementById('evento').value;

    // Simulación de validación de los datos (puedes agregar validaciones reales)
    if (nombreCompleto && evento) {
        // Aquí puedes agregar la lógica de generación de certificado
        alert(`Solicitud de certificado para ${nombreCompleto} del evento: ${evento} ha sido enviada.`);
    } else {
        // Si falta algún campo
        alert('Por favor, completa todos los campos para solicitar el certificado.');
    }
});
