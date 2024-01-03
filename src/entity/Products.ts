import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Products{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    title: string

    @Column()
    type:string

    @Column()
    description:string

    @Column({nullable :true})
    capacity: string | null

    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    registerDate: Date;

    @Column({ default: false })
    isDeleted: boolean;

    @ManyToOne(() => User, (user) => user.products)
    user: User
}