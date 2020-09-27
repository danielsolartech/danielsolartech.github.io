/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import "module-alias/register";
import CoreManager from "@CoreManager";

try {
  CoreManager.run();
} catch (error) {
  console.error(error);
}
