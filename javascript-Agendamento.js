function agendarConsulta() {
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    var hora = document.getElementById('hora').value;
    var especialidade = document.getElementById('especialidade').value;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p><strong>Consulta Agendada:</strong></p>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Hora:</strong> ${hora}</p>
        <p><strong>Especialidade:</strong> ${especialidade}</p>
    `;

}


