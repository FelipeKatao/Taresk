
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
    AddNewAlert(message,alertType){
        let position = document.getElementById("alertEscape");
        let newDiv = document.createElement('div');
        let newBt= document.createElement('button');
        let newSP= document.createElement('span');
        var newText = document.createTextNode(message);
        newDiv.classList.add("alert");

        //Definir qual tipo de aviso deve aparecer//
        if(alertType=="alert-danger")
        {
            newDiv.classList.add("alert-danger");
        }
        if(alertType=="alert-success")
        {
            newDiv.classList.add("alert-success");
        }
        if(alertType=="alert-warning")
        {
            newDiv.classList.add("alert-warning");
        }      
        newDiv.classList.add("alert-dismissible");
        newDiv.classList.add("fade");
        newDiv.classList.add("show");
        newDiv.setAttribute("role","alert");
        newDiv.appendChild(newText);
        newBt.setAttribute('type',"button");
        newBt.classList.add("close");
        newBt.setAttribute('data-dismiss',"alert");
        newBt.setAttribute("aria-label","Close");
        newSP.setAttribute("aria-hidden","true");
        newSP.innerHTML = "&times;"

        position.appendChild(newDiv);
        newDiv.appendChild(newBt);
        newBt.appendChild(newSP);

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