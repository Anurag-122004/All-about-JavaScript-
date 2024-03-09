let addButton = document.querySelector("#add-button");
let taskInput = document.querySelector("#wrapper input");
let taskContainer = document.querySelector("#tasks");
let countValue = document.querySelector(".count-value");
let error = document.getElementById("error");

let taskCount = 0;

const displayCount = () => {
    countValue.innerText = taskCount;
};



const addtask = () => {
    const taskName = taskInput.value.trim();
    error.style.display = `none`;
    if (!taskName) {
        setTimeout(
            () => {
                error.style.display = `block`;
            }
        ,200);
        return;
    }

    const task = `<div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskName" >${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    </button>
    </div>`;

    taskContainer.insertAdjacentHTML(`beforeend`, task);

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.parentNode.remove();
            taskCount--;
            displayCount(taskCount);
        });
    });

};

addButton.addEventListener(`click`, addtask);

