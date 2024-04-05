import minimist from "minimist";
import { green, red } from "kolorist";
import { createBaseProject } from "./base-project-creation";
import { installDependencies } from "./base-project-dependencies-installation";
import { copyTemplateFiles } from "./template-copy";

const argv = minimist<{
  t?: string;
  template?: string;
}>(process.argv.slice(2), { string: ["_"] });

const run = async () => {
  const targetDir = formatTargetDir(argv._[0]);

  if (!targetDir) {
    console.error(red("\nPlease specify the project directory:"));
    console.error(`  ${green("yarn create vite <project-directory>")}}\n`);
    return;
  }

  await createBaseProject(targetDir);
  await installDependencies(targetDir);
  await copyTemplateFiles(targetDir);
};

function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, "");
}

run().catch((error) => {
  console.error(error, "\n");
  return;
});
