import { spawn } from "node:child_process";

export const createBaseProject: (targetDir: string) => Promise<string> = (
  targetDir
) =>
  new Promise((resolve, reject) => {
    const command = "yarn";
    const args = `create vite ${targetDir} --template react-ts`.split(" ");

    const childProcess = spawn(command, args, {
      stdio: "inherit",
      shell: true
    });

    childProcess.on("error", (error) => {
      reject(error.message);
    });

    childProcess.on("close", (code) => {
      if (code === 0)
        resolve(`Successfully created a new Vite project. (code ${code})`);
      else reject(`Child process exited with code ${code}`);
    });
  });
