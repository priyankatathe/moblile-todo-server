const router =require("express").Router()

const todoControllers =require("./../controllers/todo.controller")

router
    .get("/", todoControllers.getAllTodos)
    .post("/", todoControllers.addTodos)
    .put("/:id", todoControllers.updateTodos)
    .delete("/:id", todoControllers.deleteTodos)

    module.exports = router
