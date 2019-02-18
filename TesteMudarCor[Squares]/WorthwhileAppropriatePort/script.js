//Ao clicar mudar a cor dos quadrados
document.querySelector("#red").addEventListener('click', function (e) {
  e.preventDefault();
  const element = document.querySelector("#square1");
  if(element.classList.contains("red"))
  {
    element.classList.remove("red");
    element.classList.add("blue");
  }
  else
  {
    element.classList.remove("blue");
    element.classList.add('red');
  }
});

document.querySelector("#blue").addEventListener('click', function (e) {
  const element = document.querySelector("#square3")
  e.preventDefault();
  if(element.classList.contains("green"))
  {
    element.classList.remove("green");
    element.classList.add("blue");
  }
  else
  {
  element.classList.remove("blue");
  element.classList.add("green");
  }
});

document.querySelector("#green").addEventListener('click', function (e) {
  const element = document.querySelector("#square2")
  e.preventDefault();
  if(element.classList.contains("blue"))
  {
  element.classList.remove("blue");
  element.classList.add("green")
  }
  else
  {
  element.classList.remove("green");
  element.classList.add("blue");
  }
});