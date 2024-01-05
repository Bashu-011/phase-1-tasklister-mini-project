//The callback function takes the input from the input tag with the id=new-task-description
//The input is the parsed to the othe functions

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    SetActivity(document.getElementById('new-task-description').value)
    form.reset()
  })
});

//This is a function that sets the tasks into a list

function SetActivity(toDo){
  let line = document.createElement('p')
//This function also creates the delete button
  let bttn = document.createElement('button')
  bttn.addEventListener('click', deleteActivity)
  bttn.textContent = 'x'
  line.textContent = `${toDo} `
//Both the list and button are appended to the list with the id = tasks
  line.appendChild(bttn)
  console.log(line)
  document.getElementById('tasks').appendChild(line)
}

//This function handles the delete button so as to remove an activity from a list

function deleteActivity(e){
e.target.parentNode.remove()
}

