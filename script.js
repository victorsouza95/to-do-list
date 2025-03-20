function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.textContent = taskText;

    // Adiciona um botão para remover a tarefa
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remover";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Marcar como concluído ao clicar na tarefa
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Limpa o campo após adicionar
}
