import express from "express";
import Todo from "../models/todo.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({ status: "Success", data: todos });
  } catch (error) {
    res.status(500).json({ status: "Failure", message: error });
  }
});

// Get single todo
router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const todo = await Todo.findById(req.params.id);

    res.status(200).json({ status: "Success", data: todo });
  } catch (error) {
    res.status(500).json({ status: "Failure", message: error });
  }
});

// Add new todo
router.post("/", async (req, res) => {
  try {
    let { todo } = req.body;

    const newTodo = await Todo.create({ todo });

    res.status(201).json({ status: "Success", data: newTodo });
  } catch (error) {
    res.status(500).json({ status: "Failure", message: error });
  }
});

// Edit a todo
router.patch("/:id", async (req, res) => {
  try {
    let { todo } = req.body;

    let updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { todo });

    res.status(201).json({ status: "Success", data: updatedTodo });
  } catch (error) {
    res.status(500).json({ status: "Failure", message: error });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    let deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    res.status(201).json({ status: "Success", data: deletedTodo });
  } catch (error) {
    res.status(500).json({ status: "Failure", message: error });
  }
});

export default router;
