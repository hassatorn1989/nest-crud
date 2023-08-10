import { Model } from "sequelize";
import { Column, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'users',
    timestamps: false,
})

export class User extends Model {
    @PrimaryKey
    @Column
    id: number;

    @Column
    username: string;

    @Column
    email: string;

    @Column
    password: string;
    
}
