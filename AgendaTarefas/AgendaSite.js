//Legacy
var Id = 0;
var IdTask=[];


//Adicionar a nova tarefa a Dash Board//
function CriarElemento(Descricao, TipoDeAnotacao)
    {
        var NewDiv=document.createElement('div');
        var position = document.getElementById('Escopo');
        var newText = document.createTextNode(Descricao+Id)

        NewDiv.id = Descricao+Id;
        console.log(NewDiv.id);
        IdTask.push(NewDiv.id);
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
    if (Id <= 3)
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
        CriarElemento("#"+Id+document.getElementById('TituloInput').value, document.getElementById('DescrArea').value);
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
    if(IdTask.length!=0)
    {
    var parent = document.getElementById("Escopo");
    var child = document.getElementById(IdTask[length]);
    console.log(IdTask);
    parent.removeChild(child);
    IdTask.shift()
    console.log(IdTask);
    Id-=1;
    
    }
    else
    {
      alert("Não existe tarefas para serem excluidas.")
    }

});

document.querySelector("#prioridade").addEventListener('click', function (e) {
    //Limpar as tarefas//
    if(IdTask.length!=0)
    {
    let child = document.getElementById(IdTask[length]);
    child.classList.remove("ListaTarefas_class_Medium");
    child.classList.add("ListaTarefas_class_Red");
    }
    else
    {
      alert("Não existe tarefas no painel.")
    }

});

function main()
{
  CriarElemento("stephaniedelgado/webservice_go Create main.go","#1 opened 11 days ago by FelipeKatao");
}
main();

