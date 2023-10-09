import { BaseEntity, Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    email: string

    @Column()
    @Generated("uuid")
    id: string

    @Column()
    name: string

    @Column({ nullable: true })
    password: string

    @Column()
    role: number

    @Column({ type: 'varchar', nullable: true })
    token: string;
  
    @CreateDateColumn({ type: 'timestamp', name: 'created_ad', nullable: false })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', name: 'update_ad', nullable: false })
    updateAt: Date;
}
