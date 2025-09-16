function mostrarPanel(panelId) {
    document.getElementById('panelInsertar').style.display = 'none';
    document.getElementById('panelModificar').style.display = 'none';
    document.getElementById('panelEliminar').style.display = 'none';
    document.getElementById(panelId).style.display = 'block';
}

document.getElementById('btnInsertar').onclick = function() { mostrarPanel('panelInsertar'); };
document.getElementById('btnModificar').onclick = function() { mostrarPanel('panelModificar'); };
document.getElementById('btnEliminar').onclick = function() { mostrarPanel('panelEliminar'); };
document.getElementById('btnVolver').onclick = function() { 
    // Acción de volver, puedes ocultar paneles o redirigir
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

// Simulación de búsqueda y edición en modificar
document.getElementById('btnBuscarModificar').onclick = function() {
    let dni = document.getElementById('dniModificar').value;
    if (!dni) {
        alert("Ingrese un DNI para buscar.");
        return;
    }
    document.getElementById('datosModificar').style.display = 'block';
    document.getElementById('nombreModificar').value = 'NombreSimulado';
    document.getElementById('apellidoModificar').value = 'ApellidoSimulado';
    document.getElementById('passwordModificar').value = 'PassSim';
};

// Simulación de acciones
document.getElementById('btnConfirmarInsertar').onclick = function() {
    alert("Cliente insertado (simulado).");
    document.getElementById('btnLimpiarInsertar').click();
};
document.getElementById('btnConfirmarModificar').onclick = function() {
    alert("Cliente modificado (simulado).");
    document.getElementById('btnLimpiarModificar').click();
};
document.getElementById('btnConfirmarEliminar').onclick = function() {
    alert("Cliente eliminado (simulado).");
    document.getElementById('btnLimpiarEliminar').click();
};