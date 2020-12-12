import fs from "fs";
import path from "path";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const readFile = async (fileName: string): Promise<string> => {
  const file = await fs.promises.readFile(
    path.join(serverRuntimeConfig.PROJECT_ROOT, fileName)
  );

  return file.toString();
};

export default readFile;
