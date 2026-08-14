
const tasksDOM = document.querySelector(".tasks"); // this is the one where tasks will be shown.
const loadingDOM = document.querySelector(".loading-text"); // this is for when you hvae put data and it takes time to come.
const formDOM = document.querySelector(".task-form"); // the full form jiske andat task likhne ka likha hai
const taskInputDOM = document.querySelector(".task-input"); // the input box
const formAlertDOM = document.querySelector(".form-alert"); // this is when you do submit it will show submitted or not.



async function showTask() {
  loadingDOM.style.visibility = "visible";
  try {
    const response = await axios.get("/api/tasks");
    const info = response.data;

    if (info.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>';
      loadingDOM.style.visibility = "hidden";
      return;
    }

    const allTasks = info
      .map((task) => {
        const { completed, _id: id, name } = task;

        return `<div class="single-task ${completed && "task-completed"}">
                <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
                <div class="task-links">
                <a href="task.html?id=${id}"  class="edit-link">
                <i class="fas fa-edit"></i>
                </a>
                <button type="button" class="delete-btn" data-id="${id}">
                <i class="fas fa-trash"></i>
                </button>
                </div>
                </div>`;
      })
      .join("");
    tasksDOM.innerHTML = allTasks;
  } catch (err) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>';
  }

  loadingDOM.style.visibility = "hidden";
}

showTask();

tasksDOM.addEventListener("click", async (e) => {
  if (e.target.closest(".delete-btn")) {
    const btn = e.target.closest(".delete-btn");
    const id = btn.dataset.id;
    try {
      await axios.delete(`/api/tasks/${id}`);
      showTask();
    } catch (err) {
      alert(err);
    }
  }

});



formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = taskInputDOM.value.trim();

  try {
    await axios.post("/api/tasks", { name });
    showTask();
    taskInputDOM.value = "";
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = "Task added successfully";
    formAlertDOM.classList.add("text-success");
  } catch (err) {
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = "Error please try again";
  }

  setTimeout(() => {
    formAlertDOM.textContent = "";
    formAlertDOM.classList.remove("text-success");
  }, 2000);
});
