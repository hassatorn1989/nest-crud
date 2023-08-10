import { SequelizeModule } from "@nestjs/sequelize";
import { Tutorial } from "src/tutorials/tutorials.model";
export const dbConfig: any = SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'tutorial',
    models: [
        Tutorial
    ],
});