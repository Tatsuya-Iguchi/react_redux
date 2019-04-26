import mongoose from 'mongoose'

mongoose.Promise= global.Promise
//create schema
const TodoSchema = new mongoose.Schema({
    overview:String,
    memo:String,
})

//create model
const Todo = mongoose.model('Todo',TodoSchema)

export default Todo