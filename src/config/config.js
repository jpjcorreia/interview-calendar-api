require('dotenv-safe').config();


const config  = {
    port: parseInt(process.env.PORT, 10) || 3000,
    dbhost: process.env.DB_HOST || 'localhost',
    dbuser: process.env.DB_USER || 'root',
    dbpassword: process.env.DB_PASS || 'root',
    databasename: process.env.DB_NAME || 'SchedulingDB',
    databaseurl: process.env.DB_URL || 'mongodb://localhost:27017/SchedulingDB'
}

export default config;