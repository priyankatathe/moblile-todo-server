const asynchandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.getAllTodos = asynchandler(async(req,res) =>{
    const result = await Todo.find()
    res.json({ message: "Todo fetch successfully", result })
})

exports.addTodos = asynchandler(async(req,res) =>{
    await Todo.create(req.body)
    res.json({ message: "Todo add successfully" })
})

exports.updateTodos = asynchandler(async(req,res) =>{
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo update successfully" })
})

exports.deleteTodos = asynchandler(async(req,res) =>{
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo delete successfully" })
})
