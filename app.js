#! /usr/bin/env node

const chalk = require('chalk')
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const AI = require('./Services/AI')

const r1 = readline.createInterface({ input, output })

console.log("Hello");
r1.prompt()
r1.on('line', async (input) => {
  try {
    const reply = await AI.chat(input)
    console.log("\n", chalk.green(reply), "\n");

  } catch (error) {
    if (error.response) {
      if (error.response.status === 429) {
        console.log(
          chalk.red("\nYou are limited to 3 replies per minute.\nPlease wait a bit and try again\n")
        )
      } else {
        console.error(chalk.red("You have an error code of", error.response.status));
      }
    } else {
      console.error(chalk.red(`Error with OpenAI API request: ${error.message}`));
    }
  }
})