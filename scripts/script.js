const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
  e.preventDefault()

  const taskInput = document.getElementById('task')
  const task = taskInput.value

  const newDiv = document.createElement('div')

  const newTask = document.createElement('p')
  newTask.innerText = task

  const newButton = document.createElement('button')
  newButton.innerHTML = `<i class="fas fa-trash-alt"></i>`
  newButton.classList.add('trash')
  newButton.addEventListener('click', function () {
    newDiv.style.display = 'none'
  })

  const newHr = document.createElement('hr')

  newTask.addEventListener('click', function () {
    newTask.classList.toggle('completed')
  })

  const taskList = document.getElementById('task-list')
  newDiv.appendChild(newHr)
  newDiv.appendChild(newTask)
  newDiv.appendChild(newButton)
  taskList.appendChild(newDiv)

  form.reset()
})
