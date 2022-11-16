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
    if (!task) {
      return res.status(404).json({
        message: `NO TASK WITH THAT ID ${req.params.id}, (404)`,
      });
    }
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
    // const { id: taskId } = req.params;
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "UPDATED",
      task: task,
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
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: `NO TASK WITH THAT ID ${req.params.id}, (404)`,
      });
    }
    res.status(200).json({
      // yes we could use 204 code
      status: "DELETED",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
