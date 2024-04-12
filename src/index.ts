import minimist from "minimist";
import { createBaseProject } from "./base-project-creation";
import { installDependencies } from "./base-project-dependencies-installation";
import { copyTemplateFiles } from "./template-copy";
import inquirer from "inquirer";

const argv = minimist<{
  t?: string;
  template?: string;
}>(process.argv.slice(2), { string: ["_"] });

const run = async () => {
  let targetDir = formatTargetDir(argv._[0]);

  if (!targetDir) {
    const directoryNamePrompt = await inquirer.prompt([
      {
        type: "input",
        name: "value",
        message: "Project directory name?",
        validate: (value: string) => {
          if (formatTargetDir(value) === "")
            return "Please enter a valid project directory name";

          return true;
        },
      },
    ]);
    targetDir = formatTargetDir(directoryNamePrompt.value);
  }

  await createBaseProject(targetDir);
  await installDependencies(targetDir);
  await copyTemplateFiles(targetDir);
};

function formatTargetDir(targetDir: string) {
  return targetDir?.trim().replace(/\/+$/g, "");
}

run().catch((error) => {
  console.error(error, "\n");
  return;
});
