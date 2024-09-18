import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()
// process.env   -> saldrá todas las variables

const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*'],
    logging: false
})

export default db

