import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Products } from "./Products";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Products, (products) => products.userId)
  products: Products[];

  @Column()
  password: string;
  @BeforeInsert()
  hashPassword() {
    const hashed = getRounds(this.password);
    if (!hashed) {
      this.password = hashSync(this.password, 10);
    }
  }
}
