function mostrarPanel(panelId) {
    document.getElementById('panelInsertar').style.display = 'none';
    document.getElementById('panelModificar').style.display = 'none';
    document.getElementById('panelEliminar').style.display = 'none';
    if (panelId) document.getElementById(panelId).style.display = 'block';
    // Reset datosModificar panel when switching
    if (panelId !== 'panelModificar') document.getElementById('datosModificar').style.display = 'none';
}

document.getElementById('btnInsertar').onclick = function() { mostrarPanel('panelInsertar'); };
document.getElementById('btnModificar').onclick = function() { mostrarPanel('panelModificar'); };
document.getElementById('btnEliminar').onclick = function() { mostrarPanel('panelEliminar'); };
document.getElementById('btnVolver').onclick = function() { 
    mostrarPanel(''); 
    document.getElementById('panelInsertar').style.display = 'none';
    document.getElementById('panelModificar').style.display = 'none';
    document.getElementById('panelEliminar').style.display = 'none';
};

// Limpiar campos
document.getElementById('btnLimpiarInsertar').onclick = function() {
    document.getElementById('dniInsertar').value = '';
    document.getElementById('nombreInsertar').value = '';
    document.getElementById('apellidoInsertar').value = '';
    document.getElementById('passwordInsertar').value = '';
};
document.getElementById('btnLimpiarModificar').onclick = function() {
    document.getElementById('dniModificar').value = '';
    document.getElementById('nombreModificar').value = '';
    document.getElementById('apellidoModificar').value = '';
    document.getElementById('passwordModificar').value = '';
    document.getElementById('datosModificar').style.display = 'none';
};
document.getElementById('btnLimpiarEliminar').onclick = function() {
    document.getElementById('dniEliminar').value = '';
};

// Validación y simulación de alta
document.getElementById('btnConfirmarInsertar').onclick = function() {
    let dni = document.getElementById('dniInsertar').value.trim();
    let nombre = document.getElementById('nombreInsertar').value.trim();
    let apellido = document.getElementById('apellidoInsertar').value.trim();
    let password = document.getElementById('passwordInsertar').value.trim();

    if (!dni || !nombre || !apellido || !password) {
        alert("Error: Debe completar todos los campos para insertar un cliente.");
        return;
    }
    alert("Cliente insertado (simulado): " + nombre + " " + apellido);
    document.getElementById('btnLimpiarInsertar').click();
};

// Validación y simulación de eliminación
document.getElementById('btnConfirmarEliminar').onclick = function() {
    let dni = document.getElementById('dniEliminar').value.trim();
    if (!dni) {
        alert("Error: Debe ingresar el DNI para eliminar un cliente.");
        return;
    }
    let confirmar = confirm("¿Está seguro que quiere eliminar el cliente con DNI " + dni + "?");
    if (!confirmar) return;
    alert("Cliente eliminado (simulado): " + dni);
    document.getElementById('btnLimpiarEliminar').click();
};

// Modificar: Buscar y mostrar datos
document.getElementById('btnBuscarModificar').onclick = function() {
    let dni = document.getElementById('dniModificar').value.trim();
    if (!dni) {
        alert("Error: Debe ingresar el DNI para buscar el cliente a modificar.");
        return;
    }
    // Simulación: muestra los datos
    document.getElementById('datosModificar').style.display = 'block';
    document.getElementById('nombreModificar').value = 'NombreSimulado';
    document.getElementById('apellidoModificar').value = 'ApellidoSimulado';
    document.getElementById('passwordModificar').value = 'PassSim';
};

// Validación y simulación de modificación
document.getElementById('btnConfirmarModificar').onclick = function() {
    let dni = document.getElementById('dniModificar').value.trim();
    let nombre = document.getElementById('nombreModificar').value.trim();
    let apellido = document.getElementById('apellidoModificar').value.trim();
    let password = document.getElementById('passwordModificar').value.trim();

    if (!dni || !nombre || !apellido || !password) {
        alert("Error: Debe completar todos los campos para guardar la modificación.");
        return;
    }
    alert("Cliente modificado (simulado): " + nombre + " " + apellido);
    document.getElementById('btnLimpiarModificar').click();
};