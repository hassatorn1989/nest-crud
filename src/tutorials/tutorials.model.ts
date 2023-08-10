import { Column, Model, Table, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: 'tutorials',
    timestamps: true,
})
export class Tutorial extends Model<Tutorial> {
    @PrimaryKey
    @Column
    id: number;
    
    @Column(DataType.STRING)
    title: string;

    @Column(DataType.STRING)
    description: string;

    @Column(DataType.BOOLEAN)
    published: boolean;
    
}