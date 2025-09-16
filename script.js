// Si subís la imagen, la mostramos
window.onload = function() {
    const img = document.getElementById('banco-img');
    fetch('banco.jpg').then(res => {
        if (res.ok) img.style.display = 'block';
    });
};

function cerrarPanel(panelId) {
    document.getElementById(panelId).style.display = 'none';
}

function ocultarTodosLosPaneles(exceptId = null) {
    const paneles = ['panelAñadir', 'panelEliminar', 'panelModificar'];
    paneles.forEach(id => {
        if (id !== exceptId) document.getElementById(id).style.display = 'none';
    });
}

document.getElementById('btnAñadir').onclick = function() {
    const panel = document.getElementById('panelAñadir');
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        ocultarTodosLosPaneles('panelAñadir');
        panel.style.display = 'block';
    }
};

document.getElementById('btnEliminar').onclick = function() {
    const panel = document.getElementById('panelEliminar');
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        ocultarTodosLosPaneles('panelEliminar');
        panel.style.display = 'block';
    }
};

document.getElementById('btnModificar').onclick = function() {
    const panel = document.getElementById('panelModificar');
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        ocultarTodosLosPaneles('panelModificar');
        panel.style.display = 'block';
        document.getElementById('datosModificar').style.display = 'none';
    }
};

document.getElementById('btnVolver').onclick = function() {
    ocultarTodosLosPaneles();
};

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
    document.getElementById('dniAñadir').value = '';
    document.getElementById('nombreAñadir').value = '';
    document.getElementById('apellidoAñadir').value = '';
    document.getElementById('passwordAñadir').value = '';
    cerrarPanel('panelAñadir');
};

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
    document.getElementById('dniModificar').value = '';
    document.getElementById('nombreModificar').value = '';
    document.getElementById('apellidoModificar').value = '';
    document.getElementById('passwordModificar').value = '';
    document.getElementById('datosModificar').style.display = 'none';
    cerrarPanel('panelModificar');
};