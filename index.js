#!/usr/bin/env node
"use strict";

import chalk from "chalk";
import boxen from "boxen";
import clear from "clear";
import inquirer from "inquirer";
import Enquirer from "enquirer";
import open from "open";
import terminalImage from "terminal-image";

clear();

const data = {
  name: chalk.bold.green("@amuyl"),
  github: chalk.hex("#787878")("https://github.com/augustinmuyl/"),
  npx: chalk.hex("#787878")("npx amuyl"),
  email: chalk.hex("#787878")("augustinmuyl.dev@gmail.com"),

  labelGithub: chalk.hex("#9E9E9E").bold("git:"),
  labelEmail: chalk.hex("#9E9E9E").bold("eml:"),
  labelCard: chalk.hex("#9E9E9E").bold("npm:"),
};

const card = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelGithub} ${data.github}`,
    `${data.labelCard} ${data.npx}`,
    `${data.labelEmail} ${data.email}`,
    ``,
    `${chalk("omnia mea mecom porto.")}`,
  ].join("\n"),
  {
    margin: 0,
    padding: { top: 1, bottom: 1, right: 2, left: 2 },
    borderStyle: "double",
    borderColor: "white",
  },
);

const options = {
  type: "list",
  name: "actions",
  message: "select action",
  choices: [
    {
      name: "| resume",
      value: async () => {
        console.log("opening resume ...");
        open(
          "https://drive.google.com/file/d/1rp7YcWaModxmp8_CzYQu7Y3pSWcMJtfJ/view?usp=sharing",
        );
      },
    },
    {
      name: "| website",
      value: async () => {
        console.log("opening website ...");
        open("https://www.augustinmuyl.com/");
      },
    },
    "- exit",
  ],
};

console.log(card);

function main() {
  inquirer.prompt(options).then(async (answer) => {
    if (answer.actions == "- exit") {
      return;
    } else {
      console.log("-".repeat(40));
      await answer.actions();
      console.log("-".repeat(40));

      Enquirer.prompt({
        type: "toggle",
        name: "again",
        message: "exit?",
        default: false,
      }).then((answer) => {
        if (answer.again == false) {
          main();
        }
      });
    }
  });
}

main();
