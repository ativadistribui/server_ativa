import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Products {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  capacity: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  registerDate: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user.products)
  userId: string;
}
