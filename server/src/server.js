require('dotenv/config');

const port = process.env.PORT;
const server = require('./app');
const database = require('./connection');

server.listen(port, () => {
    database.authenticate()
        .then( () => {
            console.log('The connection with the database was successful.');
        })
        .catch( (error) => {
            console.log('The connection with the database was not successful.');
        })
    console.log(`Server listen in port ${port}. Connection ok...`);
});
