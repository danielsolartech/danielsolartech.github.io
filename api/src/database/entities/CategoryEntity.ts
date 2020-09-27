/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import CoreManager from "@CoreManager";

@Entity("categories")
class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  async save(): Promise<void> {
    await CoreManager.getDatabase().getCategories().save(this);
  }
}

export default CategoryEntity;
