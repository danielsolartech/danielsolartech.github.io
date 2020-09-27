/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import DatabaseManager from "@DatabaseManager";
import ServerManager from "@ServerManager";

class CoreManager {
  private static database: DatabaseManager;
  private static server: ServerManager;

  static getDatabase(): DatabaseManager {
    if (!this.database) {
      this.database = new DatabaseManager();
    }

    return this.database;
  }

  static getServer(): ServerManager {
    if (!this.server) {
      this.server = new ServerManager();
    }

    return this.server;
  }

  static async run(): Promise<void> {
    try {
      if (process.env.NODE_ENV !== "production") {
        const dotenv = require("dotenv");
        dotenv.config();
      }

      await this.getDatabase().run();

      await this.getServer().run(
        process.env.API_HOST || "localhost",
        Number(process.env.API_PORT || "3000")
      );
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

export default CoreManager;
