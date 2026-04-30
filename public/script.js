const formulario = document.getElementById("formularioInscripcion");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const contacto = document.getElementById("contacto").value.trim();
    const taller = document.getElementById("taller").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || edad === "" || contacto === "" || taller === "") {
        alert("Completa todos los campos obligatorios");
        return;
    }

    if (parseInt(edad) < 12) {
        alert("Debes tener al menos 12 años");
        return;
    }

    if (!/^\d{10}$/.test(contacto)) {
        alert("El número debe tener 10 dígitos");
        return;
    }

    fetch("/guardar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            correo,
            edad,
            contacto,
            taller,
            mensaje
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Inscripción guardada correctamente");
        formulario.reset();
    })
    .catch(err => {
        console.error(err);
        alert("Error al guardar");
    });
});