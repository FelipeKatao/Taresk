//Legacy
var Id = 0;
var idChange = 0;
var IdTask = [];

//Adicionar a Nova tarefa (tabela) no painel
function CriarElementoTabela(Descricao, TipoDeAnotacao) {
    Id += 1
    let divElement = document.getElementById('painel');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let th = document.createElement('th');

    tr.id = Id;
    IdTask.push(tr.id);
    divElement.appendChild(tr);
    th.textContent = Id;
    tr.appendChild(th);
    td.textContent = Descricao;
    tr.appendChild(td);
    td2.textContent = TipoDeAnotacao;
    tr.appendChild(td2);


}
//Adicionar a nova tarefa a Dash Board//
function CriarElemento(Descricao, TipoDeAnotacao) {
    var NewDiv = document.createElement('div');
    var position = document.getElementById('Escopo');
    var newText = document.createTextNode(Descricao + Id)

    NewDiv.id = Descricao + Id;
    console.log(NewDiv.id);
    IdTask.push(NewDiv.id);
    NewDiv.classList.add("ListaTarefas_class_Medium");
    position.appendChild(NewDiv);

    NewDiv = document.createElement('ul');
    position = document.getElementById(Descricao + Id);
    NewDiv.id = TipoDeAnotacao + Id;
    position.appendChild(NewDiv);

    NewDiv = document.createElement('li');
    position = document.getElementById(TipoDeAnotacao + Id);
    newText = document.createTextNode(Descricao);
    NewDiv.appendChild(newText);
    NewDiv.classList.add("Lista_Tarefas");
    position.appendChild(NewDiv);

    NewDiv = document.createElement('li');
    position = document.getElementById(TipoDeAnotacao + Id);
    newText = document.createTextNode(TipoDeAnotacao);
    NewDiv.appendChild(newText);
    NewDiv.classList.add("Lista_Tarefas_sobre");
    position.appendChild(NewDiv);

    Id += 1;

}
//Adcionar Badge de uma tarefa
function adicionarbadge(Elemento) {


    var newDiv = document.createElement('div');
    var position = document.getElementById(Elemento);
    var newText = document.createTextNode("Alerta!");

    newDiv.appendChild(newText);
    newDiv.classList.add("badge");
    newDiv.classList.add("badge-danger");
    position.appendChild(newDiv);

}


document.querySelector("#EnviarBtNova").addEventListener('click', function () {
    if (document.getElementById('TituloInput').value != 0) {
        //CriarElemento("#" + Id + document.getElementById('TituloInput').value, document.getElementById('DescrArea').value);
        CriarElementoTabela(document.getElementById('TituloInput').value, document.getElementById('DescrArea').value);
        clearForm();
    } else {
        alert("A tarefa precisa ter pelo menos um titulo!");
    }
});

document.querySelector("#ClearTarefas").addEventListener('click', function (e) {

    if (IdTask.length != 0) {
        var parent = document.getElementById('painel');
        var child = document.getElementById(IdTask[0]);
        console.log(IdTask);
        console.log(IdTask[length]);
        parent.removeChild(child);
        IdTask.shift()
        console.log(IdTask);
    } else {
        alert("Não existe tarefas para serem excluidas.")
    }

});


document.querySelector("#prioridade").addEventListener('click', function (e) {


    if (IdTask.length != 0) {
        console.log(idChange);
        adicionarbadge(IdTask[idChange]);
        idChange += 1;
    } else {
        alert("Não existe tarefas no painel.")
    }

});

function clearForm() {
    document.querySelector('#TituloInput').value = '';
    document.querySelector('#DescrArea').value = '';
}
