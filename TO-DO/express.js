
// import mongoose from "mongoose";
// import express from "express";
// import { Todo } from "./models/todo.js"

// let conn = await mongoose.connect("mongodb://localhost:27017/")


// const app = express()
// const port = 3000

// // When you open http://localhost:3000/
// //This below function runs

// app.get('/', (req, res) => {
//     const todo = new Todo({title: "Hey firt todo", desc: "Description of this todo", isDone: false})
//     todo.save()
//   res.send('Hello World!')
// })


// //When you open: http://localhost:3000/a
// // This below function runs

// app.get('/a', async (req, res) => {
//     let todo = await Todo.findOne({})
//     res.json({title: todo.title, desc: todo.desc})
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


import express from "express";
const app = express();
import cors from "cors";
const port = 3000;


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/notes", (req, res) =>{
    console.log("Received Note: ", req.body.textarea);
    res.status(200).send("Note received successfully!!")
})

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

