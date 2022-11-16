const Task = require("./../models/taskModel");

// GET ALL
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: "SUCCESS",
      TASKS: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

// GET SINGLE
exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json({
      status: "SUCCESS",
      task: task,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

// CREATE
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      status: "Success",
      task: task, // = {task}
    });
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error,
    });
  }
};

// UPDATE
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      status: "SUCCESS",
      message: "TASK UPDATED",
      updatedTask: updatedTask, // = {updatedTask}
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

// DELETE
exports.deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return;
    }
    res.status(204).json({
      status: "DELETED",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
