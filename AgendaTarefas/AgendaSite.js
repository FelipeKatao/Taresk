//Legacy
var Id = 0;


//Adicionar a nova tarefa a Dash Board//
function CriarElemento(Descricao, TipoDeAnotacao)
    {
        var NewDiv=document.createElement('div');
        var position = document.getElementById('Escopo');
        var newText = document.createTextNode(Descricao+Id)

        NewDiv.id = Descricao+Id;
        NewDiv.classList.add("ListaTarefas_class_Medium");
        position.appendChild(NewDiv);

        NewDiv = document.createElement('ul');
        position = document.getElementById(Descricao+Id);
        NewDiv.id = TipoDeAnotacao+Id;
        position.appendChild(NewDiv);

        NewDiv = document.createElement('li');
        position = document.getElementById(TipoDeAnotacao+Id);
        newText = document.createTextNode(Descricao);
        NewDiv.appendChild(newText);
        NewDiv.classList.add("Lista_Tarefas");
        position.appendChild(NewDiv);

        NewDiv = document.createElement('li');
        position = document.getElementById(TipoDeAnotacao+Id);
        newText = document.createTextNode(TipoDeAnotacao);
        NewDiv.appendChild(newText);
        NewDiv.classList.add("Lista_Tarefas_sobre");
        position.appendChild(NewDiv);
        
        Id += 1;

}
//Ao clicar adicionar na Dashboard//
document.querySelector("#NovaTarefa").addEventListener('click', function (e) {
    e.preventDefault();
    const element = document.querySelector("#DialogoNovaTarefa")
    if (Id <= 2)
    {
        element.classList.remove("visibility_off")
        element.classList.add("visibility_on");
    }
    else
    {
        alert("Limite de Tarefas estourdo, exclua tarefas antigas");
    }
});

document.querySelector("#EnviarBtNova").addEventListener('click', function (e) {
    const element = document.querySelector("#DialogoNovaTarefa");
    if (document.getElementById('TituloInput').value != 0)
    {
        CriarElemento("#"+Id+" "+document.getElementById('TituloInput').value, document.getElementById('DescrArea').value);
        element.classList.add("visibility_off");
        element.classList.remove("visibility_on");
    }
    else
    {
        alert("A tarefa precisa ter pelo menos um titulo!");
    }
});

document.querySelector("#ClearTarefas").addEventListener('click', function (e) {
    //Limpar as tarefas//
});
