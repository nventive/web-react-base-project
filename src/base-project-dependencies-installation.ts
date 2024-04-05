import { spawn } from "node:child_process";

const DEPENDENCIES = [
  "prettier", // TODO: add it as a dev dependency
  "@mui/material@5.15.14 @emotion/react@11.11.4 @emotion/styled@11.11.0", // MUI
  // or we could get it from https://fonts.googleapis.com
  // "@fontsource/roboto", // Font used by MUI
  "@mui/icons-material@5.15.14", // MUI icons
];

export const installDependencies: (targetDir: string) => Promise<string> = (
  targetDir
) =>
  new Promise((resolve, reject) => {
    const args = ["add", ...DEPENDENCIES];

    // We need to run yarn first to install default dependencies
    // Then we run yarn add to install the new ones (otherwise some dependencies might not be installed at all)
    const childProcess = spawn(`yarn && yarn`, args, {
      stdio: "inherit",
      shell: true, // this allows us to run multiple commands in a single child process
      cwd: `./${targetDir}`,
    });

    childProcess.on("error", (error) => {
      reject(error.message);
    });

    childProcess.on("close", (code) => {
      if (code === 0) resolve(`Successfully installed eslint. (code ${code})`);
      else reject(`Child process exited with code ${code}`);
    });
  });
