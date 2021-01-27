require('dotenv/config');
const database = require('../connection');

async function getTasks (req, res) {
    const statement = process.env.GET_TASKS;
    try {
        let tasks = await database.query(statement);
        tasks = tasks[0];
        res.json(tasks);
    } catch (error) {
        res.status(500).send(`${error}`);
    }
}

async function postTask(req, res) {
    let task = req.body;
    const statement = process.env.POST_TASK;
    try {
        await database.query(statement, { replacements: task })
        res.status(201).send('ok');
    } catch (error) {
        res.status(500).send('error');
    }
}

async function updateTask (req, res) {
    let task = req.body;
    const statement = process.env.UPDATE_TASK;
    const searchStatement = process.env.GET_TASK;
    try {
        let search = await database.query(searchStatement, {replacements: [req.params.id]})
        search = search[0];
        if (search.length > 0) {
            await database.query(statement, {replacements: [
                task.title,
                task.description,
                task.finished,
                task.important,
                task.deleted,
                task.active,
                req.params.id
            ]});
            res.status(200).send('ok');
        } else {
            res.status(404).send('nonexistence');
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }
}

module.exports = {
    getTasks,
    postTask,
    updateTask
}