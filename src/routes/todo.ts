// const express = require('express'); 
// const Router = express.Router;
import { Router } from "express";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todos";

//Define routes
const router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;