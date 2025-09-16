function cerrarPanel(panelId) {
    document.getElementById(panelId).style.display = 'none';
}

function ocultarTodosLosPaneles() {
    document.getElementById('panelAñadir').style.display = 'none';
    document.getElementById('panelEliminar').style.display = 'none';
    document.getElementById('panelModificar').style.display = 'none';
}

// Botón Añadir
document.getElementById('btnAñadir').onclick = function() {
    ocultarTodosLosPaneles();
    document.getElementById('panelAñadir').style.display = 'block';
};
// Botón Eliminar
document.getElementById('btnEliminar').onclick = function() {
    ocultarTodosLosPaneles();
    document.getElementById('panelEliminar').style.display = 'block';
};
// Botón Modificar
document.getElementById('btnModificar').onclick = function() {
    ocultarTodosLosPaneles();
    document.getElementById('panelModificar').style.display = 'block';
    document.getElementById('datosModificar').style.display = 'none';
};
// Botón Volver (puedes simular navegación, aquí solo oculta paneles)
document.getElementById('btnVolver').onclick = function() {
    ocultarTodosLosPaneles();
};

// Simulación de lógica (solo muestra mensajes, no accede a base de datos)
// Añadir
document.getElementById('btnConfirmarAñadir').onclick = function() {
    let dni = document.getElementById('dniAñadir').value;
    let nombre = document.getElementById('nombreAñadir').value;
    let apellido = document.getElementById('apellidoAñadir').value;
    let password = document.getElementById('passwordAñadir').value;

    if (!dni || !nombre || !apellido || !password) {
        alert("Completa todos los campos.");
        return;
    }
    alert("Usuario añadido (simulado): " + nombre + " " + apellido);
    // Limpiar campos
    document.getElementById('dniAñadir').value = '';
    document.getElementById('nombreAñadir').value = '';
    document.getElementById('apellidoAñadir').value = '';
    document.getElementById('passwordAñadir').value = '';
    cerrarPanel('panelAñadir');
};

// Eliminar
document.getElementById('btnConfirmarEliminar').onclick = function() {
    let dni = document.getElementById('dniEliminar').value;
    if (!dni) {
        alert("Ingrese un DNI.");
        return;
    }
    let confirmar = confirm("¿Está seguro que quiere eliminar el usuario con DNI " + dni + "?");
    if (!confirmar) return;
    alert("Usuario eliminado (simulado): " + dni);
    document.getElementById('dniEliminar').value = '';
    cerrarPanel('panelEliminar');
};

// Modificar
document.getElementById('btnBuscarModificar').onclick = function() {
    let dni = document.getElementById('dniModificar').value;
    if (!dni) {
        alert("Ingrese un DNI para buscar.");
        return;
    }
    // Simulación: muestra los campos como si encontró el usuario
    document.getElementById('datosModificar').style.display = 'block';
    document.getElementById('nombreModificar').value = 'NombreSimulado';
    document.getElementById('apellidoModificar').value = 'ApellidoSimulado';
    document.getElementById('passwordModificar').value = 'PassSim';
};

document.getElementById('btnConfirmarModificar').onclick = function() {
    let dni = document.getElementById('dniModificar').value;
    let nombre = document.getElementById('nombreModificar').value;
    let apellido = document.getElementById('apellidoModificar').value;
    let password = document.getElementById('passwordModificar').value;

    if (!dni) {
        alert("Falta el DNI.");
        return;
    }
    alert("Usuario modificado (simulado): " + nombre + " " + apellido);
    // Limpiar campos
    document.getElementById('dniModificar').value = '';
    document.getElementById('nombreModificar').value = '';
    document.getElementById('apellidoModificar').value = '';
    document.getElementById('passwordModificar').value = '';
    document.getElementById('datosModificar').style.display = 'none';
    cerrarPanel('panelModificar');
};