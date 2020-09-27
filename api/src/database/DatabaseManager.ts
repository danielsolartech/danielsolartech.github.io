/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import "reflect-metadata";
import { Connection, getConnectionManager, Repository } from "typeorm";
import logs from "@Core/logs";

// Entities
import CategoryEntity from "@Entities/CategoryEntity";
import ProjectEntity from "@Entities/ProjectEntity";
import SkillEntity from "@Entities/SkillEntity";

class DatabaseManager {
  private connection: Connection;

  constructor() {
    this.connection = getConnectionManager().create({
      type: "mysql",
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT || "3306"),
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "",
      database: process.env.DB_NAME || "portfolio",
      synchronize: true,
      logging: false,
      charset: "utf8mb4",
      entities: [CategoryEntity, ProjectEntity, SkillEntity],
    });
  }

  /**
   * Get the TypeORM connection.
   *
   * @function
   * @returns { Connection }
   */
  getConnection(): Connection {
    return this.connection;
  }

  /**
   * Connect to the database.
   *
   * @async
   * @function
   * @returns { Promise<void> }
   */
  async run(): Promise<void> {
    try {
      await this.getConnection().connect();
      logs.success("Database connected");
    } catch (error) {
      Promise.reject(error);
      return;
    }
  }

  /**
   * Get the categories repository form the database.
   *
   * @function
   * @returns { Repository<CategoryEntity> }
   */
  getCategories(): Repository<CategoryEntity> {
    return this.getConnection().getRepository(CategoryEntity);
  }

  /**
   * Get the projects repository from the database.
   *
   * @function
   * @returns { Repository<ProjectEntity> }
   */
  getProjects(): Repository<ProjectEntity> {
    return this.getConnection().getRepository(ProjectEntity);
  }

  /**
   * Get the skills repository from the database.
   *
   * @function
   * @returns { Repository<SkillEntity> }
   */
  getSkills(): Repository<SkillEntity> {
    return this.getConnection().getRepository(SkillEntity);
  }
}

export default DatabaseManager;
