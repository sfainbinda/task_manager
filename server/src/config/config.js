require('dotenv/config');

module.exports = {
    port: process.env.PORT || 8081,
    database: {
        name: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        options: {
            dialect: 'mysql',
            host: 'localhost',
            logging: false
        }
    },
};
