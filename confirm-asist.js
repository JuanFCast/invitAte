function confirmarAsistencia(eventoId) {
    document.getElementById('confirmar-' + eventoId).style.display = 'block';
    document.getElementById('noConfirmar-' + eventoId).style.display = 'none';
}

function noConfirmarAsistencia(eventoId) {
    document.getElementById('noConfirmar-' + eventoId).style.display = 'block';
    document.getElementById('confirmar-' + eventoId).style.display = 'none';
}
