
class TaskView {
    template()
    {

    }
    AddNewtask(Id, Task, About) {
        let divElement = document.getElementById('painel');
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let th = document.createElement('th');

        tr.id = Id;
       // IdTask.push(tr.id);
        divElement.appendChild(tr);
        th.textContent = Id;
        tr.appendChild(th);
        td.textContent = Task;
        tr.appendChild(td);
        td2.textContent = About;
        tr.appendChild(td2);
    }
    AddNewBadge(Elemento) {
        var newDiv = document.createElement('div');
        var position = document.getElementById(Elemento);
        var newText = document.createTextNode("Alerta!");

        newDiv.appendChild(newText);
        newDiv.classList.add("badge");
        newDiv.classList.add("badge-danger");
        position.appendChild(newDiv);
    }
    clearForm() {
        document.querySelector('#TituloInput').value = '';
        document.querySelector('#DescrArea').value = '';
    }
    excludeTask(IdEl){
        let parent = document.getElementById('painel');
        let child = document.getElementById(IdEl);
        parent.removeChild(child);
    }
}