require('dotenv/config');
const database = require('../connection');

async function getMeetings (req, res) {
    const statement = process.env.GET_MEETS;
    try {
        let meets = await database.query(statement);
        meets = meets[0];
        res.json(meets);
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error}`);
    }
}

async function postMeeting(req, res) {
    let meet = req.body;
    const statement = process.env.POST_MEET;
    try {
        await database.query(statement, { replacements: meet })
        res.status(201).send('ok');
    } catch (error) {
        console.log(error)
        res.status(500).send('error');
    }
}

async function getMeeting(req, res) {
    const statement = process.env.GET_MEET;
    try {
        let meet = await database.query(statement, {replacements: [req.params.id]});
        meet = meet[0];
        if(meet.length > 0) {
            res.json(meet);
        } else {
            res.status(404).send('error');
        }
    } catch (error) {
        console.log(error);
    }
}

async function updateMeeting (req, res) {
    let meet = req.body;
    const statement = process.env.UPDATE_MEET;
    const searchStatement = process.env.GET_MEET;
    try {
        let search = await database.query(searchStatement, {replacements: [req.params.id]})
        search = search[0];
        if (search.length > 0) {
            await database.query(statement, {replacements: [
                meet.title,
                meet.description,
                meet.place,
                meet.date,
                meet.start,
                meet.end,
                meet.finished,
                meet.deleted,
                meet.active,
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
    getMeetings,
    postMeeting,
    updateMeeting
}