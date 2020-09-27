/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import Express from "express";
import logs from "@Core/logs";

class ServerManager {
  private app: Express.Express;

  constructor() {
    this.app = Express();
  }

  getApp(): Express.Express {
    return this.app;
  }

  async run(host: string, port: number): Promise<void> {
    this.getApp().listen(port, host, () => {
      logs.success(`Server initialized on ${host}:${port}`);
    });
  }
}

export default ServerManager;
