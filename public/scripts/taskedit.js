const taskNameDOM = document.querySelector(".task-edit-name"); // task name that jo tumne input mein daala tha voh yahi hoga
const taskCompletedDOM = document.querySelector(".task-edit-completed"); // this is for when you have clicked task is completed
const editFormDOM = document.querySelector(".single-task-form"); // the full form inside which ye saari functionalites hai
const editBtnDOM = document.querySelector(".task-edit-btn"); // edit btn when you done doing anything you wanted to you just click this btn
const formAlertDOM = document.querySelector(".form-alert"); // this one is when you click edit it will show you is edit done successflly for not .
const params = window.location.search;
const id = new URLSearchParams(params).get("id");


async function showTask() {
  try {
    const response = await axios.get(`/api/tasks/${id}`);
    const { completed, name: taskName } = response.data;
    taskNameDOM.value = taskName;
    if (completed) {
      taskCompletedDOM.checked = true;
    }
  } catch (err) {
    console.log(err);
  }
}

showTask();

editFormDOM.addEventListener("submit", async (e) => {
  editBtnDOM.textContent = "Loading...";
  e.preventDefault();
  try {
    const taskName = taskNameDOM.value;
    const taskCompleted = taskCompletedDOM.checked;
    const response = await axios.patch(`/api/tasks/${id}`, {
      name: taskName,
      completed: taskCompleted,
    });

    const { completed, name } = response.data;
    taskNameDOM.value = name;
    if (completed) {
      taskCompletedDOM.checked = true;
    }
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `success, edited task`;
    formAlertDOM.classList.add("text-success");
  } catch (err) {
    console.log(err);
    formAlertDOM.style.display = "block";
    formAlertDOM.innerHTML = `error, please try again`;
  }

  editBtnDOM.textContent = "Edit";

  setTimeout(() => {
    formAlertDOM.style.display = "none";
    formAlertDOM.classList.remove("text-success");
  }, 2000);
});
