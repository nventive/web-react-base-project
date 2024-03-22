#!/usr/bin/env node
const { spawn } = require("child_process");

// Define the command you want to execute
const command = "yarn";
const args = ["create", "vite"]; // Specify the arguments for creating a Vite project

// Spawn the command
const childProcess = spawn(command, args, {
  stdio: "inherit", // This option allows the child process to use the same stdio as the parent process
});

// Listen for the close event
childProcess.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
