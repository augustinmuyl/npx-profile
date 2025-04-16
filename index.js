#!/usr/bin/env node
'use strict'

import chalk from 'chalk'
import boxen from 'boxen'
import clear from 'clear'
import inquirer from 'inquirer'
import Enquirer from 'enquirer'
import open from 'open'
import terminalImage from 'terminal-image'

clear()

const data = {
    name: chalk.bold.green("@amuyl"),
    github: chalk.hex('#787878')("https://github.com/augustinmuyl/"),
    npx: chalk.hex('#787878')("npx amuyl"),
    email: chalk.hex('#787878')("augustinusmp@gmail.com"),

    labelGithub: chalk.hex('#9E9E9E').bold("git:"),
    labelEmail: chalk.hex('#9E9E9E').bold("eml:"),
    labelCard: chalk.hex('#9E9E9E').bold("npm:"),
}

const card = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelGithub} ${data.github}`,
        `${data.labelCard} ${data.npx}`,
        `${data.labelEmail} ${data.email}`,
        ``,
        `${chalk("omnia mea mecom port.")}`,
    ].join("\n"),
    {
        margin: 0,
        padding: { top: 1, bottom: 1, right: 2, left: 2},
        borderStyle: "double",
        borderColor: "white",
    }
);

console.log(card)

