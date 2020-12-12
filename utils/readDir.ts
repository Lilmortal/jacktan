import fs from "fs";
import path from "path";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const readDir = async (dirName: string): Promise<string[]> =>
  await fs.promises.readdir(
    path.join(serverRuntimeConfig.PROJECT_ROOT, dirName)
  );

export default readDir;
