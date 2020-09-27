/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import CategoryEntity from "./CategoryEntity";
import SkillEntity from "./SkillEntity";
import CoreManager from "@CoreManager";

@Entity("projects")
class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => CategoryEntity, (category) => category.id)
  @JoinColumn({
    name: "category_id",
  })
  category: CategoryEntity;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column({
    type: "longtext",
  })
  description: string;

  @OneToMany((type) => SkillEntity, (skill) => skill.id)
  skills: SkillEntity[];

  @Column({
    type: "json",
  })
  links: { [name: string]: string };

  async save(): Promise<void> {
    await CoreManager.getDatabase().getProjects().save(this);
  }

  addSkill(skill: SkillEntity): boolean {
    const skillIndex: number = this.skills.findIndex((s) => s.id === skill.id);

    if (skillIndex < 0) {
      this.skills.push(skill);
      return true;
    }

    return false;
  }

  removeSkill(skillID: number): boolean {
    const skillIndex: number = this.skills.findIndex(
      (skill) => skill.id === skillID
    );

    if (skillIndex >= 0) {
      this.skills.splice(skillIndex, 1);
      return true;
    }

    return false;
  }
}

export default ProjectEntity;
