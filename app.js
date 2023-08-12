#! /usr/bin/env node

const chalk = require('chalk')
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const AI = require('./Services/AI')

const r1 = readline.createInterface({ input, output })



console.log("Hello");
r1.prompt()
r1.on('line', async (input) => {
  const reply = await AI.chat(input)
  console.log("\n", chalk.green(reply), "\n");
})