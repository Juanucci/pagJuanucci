const API_BASE = "https://apipagprac20250917115600-emadhdacaxhkaphp.canadacentral-01.azurewebsites.net/api/clientes";

// Paneles y botones
function mostrarPanel(panelId) {
    document.getElementById('panelInsertar').style.display = 'none';
    document.getElementById('panelModificar').style.display = 'none';
    document.getElementById('panelEliminar').style.display = 'none';
    if (panelId) document.getElementById(panelId).style.display = 'block';
    if (panelId !== 'panelModificar') document.getElementById('datosModificar').style.display = 'none';
}

document.getElementById('btnInsertar').onclick = () => mostrarPanel('panelInsertar');
document.getElementById('btnModificar').onclick = () => mostrarPanel('panelModificar');
document.getElementById('btnEliminar').onclick = () => mostrarPanel('panelEliminar');
document.getElementById('btnVolver').onclick = () => {
    mostrarPanel('');
    document.getElementById('panelInsertar').style.display = 'none';
    document.getElementById('panelModificar').style.display = 'none';
    document.getElementById('panelEliminar').style.display = 'none';
    limpiarMensajes();
};

// Limpiar campos
document.getElementById('btnLimpiarInsertar').onclick = limpiarInsertar;
document.getElementById('btnLimpiarModificar').onclick = limpiarModificar;
document.getElementById('btnLimpiarEliminar').onclick = limpiarEliminar;

function limpiarInsertar() {
    document.getElementById('dniInsertar').value = '';
    document.getElementById('nombreInsertar').value = '';
    document.getElementById('apellidoInsertar').value = '';
    document.getElementById('passwordInsertar').value = '';
    document.getElementById('msgInsertar').textContent = '';
}
function limpiarModificar() {
    document.getElementById('dniModificar').value = '';
    document.getElementById('nombreModificar').value = '';
    document.getElementById('apellidoModificar').value = '';
    document.getElementById('passwordModificar').value = '';
    document.getElementById('datosModificar').style.display = 'none';
    document.getElementById('msgModificar').textContent = '';
    document.getElementById('msgBuscarModificar').textContent = '';
}
function limpiarEliminar() {
    document.getElementById('dniEliminar').value = '';
    document.getElementById('msgEliminar').textContent = '';
}
function limpiarMensajes() {
    document.getElementById('msgInsertar').textContent = '';
    document.getElementById('msgModificar').textContent = '';
    document.getElementById('msgBuscarModificar').textContent = '';
    document.getElementById('msgEliminar').textContent = '';
}

// --- INSERTAR CLIENTE ---
document.getElementById('btnConfirmarInsertar').onclick = async function() {
    limpiarMensajes();
    const dni = document.getElementById('dniInsertar').value.trim();
    const nombre = document.getElementById('nombreInsertar').value.trim();
    const apellido = document.getElementById('apellidoInsertar').value.trim();
    const password = document.getElementById('passwordInsertar').value.trim();
    const msg = document.getElementById('msgInsertar');
    if (!dni || !nombre || !apellido || !password) {
        msg.textContent = "Todos los campos son obligatorios.";
        return;
    }
    msg.textContent = "Procesando...";
    try {
        const res = await fetch(API_BASE, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ dni, nombre, apellido, password })
        });
        const text = await res.text();
        if (res.ok) {
            msg.textContent = text;
            msg.className = "msg-panel success";
            limpiarInsertar();
        } else {
            msg.textContent = text;
            msg.className = "msg-panel";
        }
    } catch (e) {
        msg.textContent = "Error de conexión.";
        msg.className = "msg-panel";
    }
};

// --- ELIMINAR CLIENTE ---
document.getElementById('btnConfirmarEliminar').onclick = async function() {
    limpiarMensajes();
    const dni = document.getElementById('dniEliminar').value.trim();
    const msg = document.getElementById('msgEliminar');
    if (!dni) {
        msg.textContent = "Debe ingresar el DNI.";
        return;
    }
    if (!confirm(`¿Está seguro que quiere eliminar el cliente con DNI ${dni}?`)) return;
    msg.textContent = "Procesando...";
    try {
        const res = await fetch(`${API_BASE}/${dni}`, { method: "DELETE" });
        const text = await res.text();
        if (res.ok) {
            msg.textContent = text;
            msg.className = "msg-panel success";
            limpiarEliminar();
        } else {
            msg.textContent = text;
            msg.className = "msg-panel";
        }
    } catch (e) {
        msg.textContent = "Error de conexión.";
        msg.className = "msg-panel";
    }
};

// --- MODIFICAR: BUSCAR CLIENTE ---
document.getElementById('btnBuscarModificar').onclick = async function() {
    limpiarMensajes();
    const dni = document.getElementById('dniModificar').value.trim();
    const msg = document.getElementById('msgBuscarModificar');
    if (!dni) {
        msg.textContent = "Debe ingresar el DNI para buscar.";
        return;
    }
    msg.textContent = "Buscando cliente...";
    try {
        const res = await fetch(`${API_BASE}/${dni}`);
        if (res.ok) {
            const cliente = await res.json();
            document.getElementById('nombreModificar').value = cliente.nombre;
            document.getElementById('apellidoModificar').value = cliente.apellido;
            document.getElementById('passwordModificar').value = cliente.password;
            document.getElementById('datosModificar').style.display = 'block';
            msg.textContent = "";
        } else {
            msg.textContent = "Cliente no encontrado.";
            document.getElementById('datosModificar').style.display = 'none';
        }
    } catch (e) {
        msg.textContent = "Error de conexión.";
    }
};

// --- MODIFICAR: GUARDAR CAMBIOS ---
document.getElementById('btnConfirmarModificar').onclick = async function() {
    limpiarMensajes();
    const dni = document.getElementById('dniModificar').value.trim();
    const nombre = document.getElementById('nombreModificar').value.trim();
    const apellido = document.getElementById('apellidoModificar').value.trim();
    const password = document.getElementById('passwordModificar').value.trim();
    const msg = document.getElementById('msgModificar');
    if (!dni || !nombre || !apellido || !password) {
        msg.textContent = "Todos los campos son obligatorios.";
        return;
    }
    msg.textContent = "Procesando...";
    try {
        const res = await fetch(`${API_BASE}/${dni}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ dni, nombre, apellido, password })
        });
        const text = await res.text();
        if (res.ok) {
            msg.textContent = text;
            msg.className = "msg-panel success";
            limpiarModificar();
        } else {
            msg.textContent = text;
            msg.className = "msg-panel";
        }
    } catch (e) {
        msg.textContent = "Error de conexión.";
        msg.className = "msg-panel";
    }
};