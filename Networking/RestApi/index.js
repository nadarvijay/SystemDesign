import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.json())

const PORT = 5111;
const Todos = [
    {
        id: "1",
        name: 'Angular',
        completed: false
    },
    {
        id: "2",
        name: 'React',
        completed: true
    }
]

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

app.all('/', (req, res) => {
    res.send("I'm UP!!");
})

app.get('/todos', (req, res) => {
    res.json(Todos)
})

app.post('/todos', (req, res) => {
    Todos.push(req.body);
    res.status(201).json({
        message: "New Todo Added Successfully"
    })
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = Todos.findIndex(item => item.id == id);

    if (index != -1) {
        Todos[index] = {
            id: id,
            ...req.body
        }

        res.status(200).json({
            message: "Todo Updated Successfully"
        })
    }
    else {
        res.status(400).json({
            message: "Todo Id not Found to update"
        })
    }

})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = Todos.findIndex(item => item.id == id);
    if (index != -1) {
        Todos.splice(index, 1);

        res.status(200).json({
            message: "Todo Deleted Successfully"
        })
    }
    else {
        res.status(400).json({
            message: "Todo Id not Found to update"
        })
    }
})
