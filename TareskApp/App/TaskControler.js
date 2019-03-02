//Vrivaveis globais da classe//
let Task = [];
var Idx = 0;
var Name = "";
var About = "";

class TaskControler {

	constructor(Id,nameTask,aboutTask)
	{
		let idGeral = 0;
		Idx = Id;
		Name = nameTask;
		About = aboutTask;
	}
	//Getters Acessor Id
	GetId()
	{
		return Idx;
	}
	//Getters Acessor Name
	GetName()
	{
		return Name;
	}
	//Getters Acessor About
	GetAbout()
	{
		return About;
	}
	//Getters Acessor Array Task
	GetArray(index)
	{
		return Task[index];
	}
	//Set task 
	TaskSet(idTask,nameTask,aboutTask)
	{
		Idx = idTask;
		Name = nameTask;
		About = aboutTask;
	}
	RemoveId(Index)
	{
		Idx = Idx - 1;
	}
	AddNewTask(Id)
	{
		Task.push(Id);
	}
}