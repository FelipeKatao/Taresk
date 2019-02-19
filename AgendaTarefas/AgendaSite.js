//Legacy
var Id = 0;

//Adicionar a nova tarefa a Dash Board//
function CriarElemento(Descricao, TipoDeAnotacao)
    {
        var NewDiv=document.createElement('div');
        var position = document.getElementById('Escopo');
        var newText = document.createTextNode(Descricao)

        NewDiv.id = Descricao;
        NewDiv.classList.add("ListaTarefas_class_Medium");
        position.appendChild(NewDiv);

        NewDiv = document.createElement('ul');
        position = document.getElementById(Descricao);
        NewDiv.id = TipoDeAnotacao;
        position.appendChild(NewDiv);

        NewDiv = document.createElement('li');
        position = document.getElementById(TipoDeAnotacao);
        newText = document.createTextNode(Descricao);
        NewDiv.appendChild(newText);
        NewDiv.classList.add("Lista_Tarefas");
        position.appendChild(NewDiv);

        NewDiv = document.createElement('li');
        position = document.getElementById(TipoDeAnotacao);
        newText = document.createTextNode(TipoDeAnotacao);
        NewDiv.appendChild(newText);
        NewDiv.classList.add("Lista_Tarefas_sobre");
        position.appendChild(NewDiv);
        
        Id += 1;

}
//Ao clicar adicionar na Dashboard//
document.querySelector("#NovaTarefa").addEventListener('click', function (e) {
    e.preventDefault();
    if (Id <= 2)
    {
        CriarElemento("FelipeKatao/JavaScriptTest Add files via upload" + Id, "#1 opened on 3 Feb 2018 by FelipeKatao" + Id);
    }
    else
    {
        alert("Limite de Tarefas na pagina, exclua tarefas antigas para poder adicionar novas.");
    }
});
