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

  @Column("text", { array: true, nullable: true })
  capacity: string[] | null;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  registerDate: Date;

  @Column({ default: false })
  isFiled: boolean;

  @Column({ default: false })
  specificity: string;

  @Column({ default: false })
  isDeleted: boolean;

  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user.products)
  userId: string;
}
