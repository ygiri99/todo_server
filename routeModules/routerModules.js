import todos from "../models/todos.js";

//API to get the data
export const getTasks = async (req, res) => {
    try {
        const datas = await todos.find();
        res.status(200).send(datas);
    } catch (error) {
        res.status(500).send(`Internal Server Error:${error}`);
    }
}

//API to add data
export const createTask = async (req, res) => {
    try {
        const data = req.body;
        //Check if data already exists
        const isTaskPresent = await todos.findOne(data);
        if (isTaskPresent) res.status(409).send({ message: `Task already exists ${isTaskPresent}` });
        else {
            const datas = await todos.insertMany(data);
            res.status(201).send({ message: 'created task :', datas });
        }
    } catch (error) {
        res.status(500).send(`Internal Server Error:${error}`);
    }
}

//API to modify data
export const upadateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updatedTask = req.body;
        await todos.findByIdAndUpdate(taskId, updatedTask);
        res.status(201).send({ message: `Task updated` });
    } catch (error) {
        res.status(500).send(`Internal Server Error:${error}`);
    }
}

//API to delete data
export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        await todos.findByIdAndDelete(taskId);
        res.status(200).send({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).send(`Internal Server Error:${error}`);
    }
}