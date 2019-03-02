var Id = 0;
class AcessoApp {
    Acessar() {

    }
}

document.querySelector("#EnviarBtNova").addEventListener('click', function () {
    let View = new TaskView();
    let cont = new TaskControler();
    if (document.getElementById('TituloInput').value != 0)
    {
        cont.TaskSet(Id, document.getElementById('TituloInput').value, document.getElementById('DescrArea').value);
        View.AddNewtask(cont.GetId(), cont.GetName(), cont.GetAbout());
        View.clearForm();
        Id += 1;
    }
    else
    {
        alert("A tarefa precisa ter pelo menos um titulo!");
    }

});

document.querySelector("#ClearTarefas").addEventListener('click', function (e) {

});
