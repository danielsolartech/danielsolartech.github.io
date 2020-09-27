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

@Entity("skills")
class SkillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column({
    type: "longtext",
  })
  description: string;

  async save(): Promise<void> {
    await CoreManager.getDatabase().getSkills().save(this);
  }
}

export default SkillEntity;
