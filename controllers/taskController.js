const Task = require("./../models/taskModel");

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
exports.getSingleTask = (req, res) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "SINGLE TASK",
  });
};
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
exports.updateTask = (req, res) => {
  res.status(200).json({
    status: "SUCCESS",
    message: "TASK UPDATED",
  });
};
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
