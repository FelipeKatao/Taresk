
var Id = 0;

document.querySelector("#EnviarBtNova").addEventListener('click', function () {

    if (document.getElementById('TituloInput').value != 0)
    {
        cont.TaskSet(Id, document.getElementById('TituloInput').value, document.getElementById('DescrArea').value);
        View.AddNewtask(cont.GetId(), cont.GetName(), cont.GetAbout());
        View.clearForm();
        Id += 1;
        $("#alert-ft").alert("close");
    }
    else
    {
        alert("A tarefa precisa ter pelo menos um titulo!");
    }

});

document.querySelector("#ExcluitBtModal").addEventListener('click', function (e) {
    let idvExclude = document.getElementById('IdvalueExclude').value;

    if (document.getElementById('Idvalue').value!="null")
    {
        try {
            View.excludeTask(idvExclude);
            cont.RemoveId(idvExclude);
            View.AddNewAlert("Tarefa: "+cont.GetName()+" Excluida com sucesso.","alert-danger");
        } catch (error) {
            alert("Id notificada não existe no contexto. Verifique se não a espaços ou se é uma numeração correta.")
            console.log("Id notificada não existe no contexto, verifique se a Id corresponde a Task que deseja selecionar");
        }
    }
});

document.querySelector("#DefenirPrioridade").addEventListener('click', function (){
    let idv =document.getElementById('Idvalue').value;
    let taskv = new TaskView();
    if (document.getElementById('Idvalue').value!=0)
    {
        try {
            taskv.AddNewBadge(idv);
            View.AddNewAlert("Tarefa: "+cont.GetName()+" definida como prioridade.","alert-warning");
        } catch (error) {
            alert("Id notificada não existe no contexto. Verifique se não a espaços ou se é uma numeração correta.")
            console.log("Id notificada não existe no contexto, verifique se a Id corresponde a Task que deseja selecionar");
        }
    }
});