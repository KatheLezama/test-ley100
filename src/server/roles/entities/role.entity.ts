import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column()
    name: string

    @Column()
    description: string

}
