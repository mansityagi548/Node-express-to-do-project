const createTodo = require("../models/tasksdb");
const asyncWrapper = require("../middleware/async")
const {createCustomError}  = require("../errors/customError");


const showTasks = asyncWrapper(async (req, res) => {
    const allTasks = await createTodo.find();
    res.status(200).json(allTasks);
});



const insertTasks = asyncWrapper(async (req, res) => {
    const todoList = new createTodo(req.body);
    await todoList.save();
    res.status(201).json({ todoList });
});




const getOneTask = asyncWrapper(async (req, res , next) => {
    const { id } = req.params;
    const task = await createTodo.findOne({ _id: id }); 
    if (!task) {
      return next(createCustomError(`No task with id "${id}" found` , 404));
    }
    res.status(200).json(task);
});




const updateTask = asyncWrapper(async (req, res , next) => {
    const { id } = req.params;
    const updatedTask = await createTodo.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    if (!updatedTask) {
      return next(createCustomError(`No task with id "${id}" found` , 404))
    }
    res.status(200).json(updatedTask);
});



const deleteTask = asyncWrapper(async (req, res , next) => {
    const { id } = req.params;
    const deletedTask = await createTodo.findOneAndDelete({ _id: id });
    if (!deletedTask) {
      return next(createCustomError("Task not found"  , 404))
    }
    res.status(200).json({ message: "Task deleted", deletedTask });
});



module.exports = { showTasks, insertTasks, getOneTask, updateTask, deleteTask };
