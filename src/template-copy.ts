import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function copy(src: string, dest: string) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

const write = (file: string, root: any, templateDir: any) => {
  const targetPath = path.join(root, file);
  copy(path.join(templateDir, file), targetPath);
};

export const copyTemplateFiles = (targetDir: string) => {
  const cwd = process.cwd();
  const root = path.join(cwd, targetDir);

  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    "../..",
    `templates/react-ts-mui`
  );

  const files = fs.readdirSync(templateDir);
  for (const file of files) {
    write(file, root, templateDir);
  }
};

export const copyAzurePipelinesFiles = (targetDir: string) => {
  const cwd = process.cwd();
  const root = path.join(cwd, targetDir);

  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    "../..",
    `templates/azure-pipelines`
  );

  const files = fs.readdirSync(templateDir);
  for (const file of files) {
    write(file, root, templateDir);
  }
};
