let url = "dados/alunos.json";

var table;
function criaTabela(){
    table = 
    `<tr>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Idade</th>
        <th>Sexo</th>
        <th>Cidade</th>
        <th>Estado</th>
        </tr>
    `;
}

function dadosJson(){
    $.getJSON(url)
    .done(function(data){

        criaTabela();
        document.getElementById("titulo").innerHTML = `Retornando dados com JQUERY:<br>`;
        document.getElementById("desc-tabela1").innerHTML = `${data['nomeEscola']} ${data['cidade']}`;
        alu= data.alunos;

        $.each(alu, function () {
            
            table += `<tr>
            <td> ${this ['nome']}</td>
            <td> ${this ['sobrenome']}</td>
            <td> ${this ['idade']}</td>
            <td> ${this ['sexo']}</td>
            <td> ${this ['cidade']}</td>
            <td> ${this ['estado']}</td>
            </tr>
            `;
        })
        document.getElementById("table1").innerHTML = table;

    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo JSON");
    })
}

dadosJson();