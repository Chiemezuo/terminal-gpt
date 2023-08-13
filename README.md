
# Terminal GPT

An AI chat-bot that runs globally from any directory in the command line, powered by OpenAI's API.

## Caveats

1. You are limited to 3 replies per minute.

2. It runs like Chat GPT, but strictly in the terminal.

3. You will need an account with [OpenAI](https://platform.openai.com/).

4. The free API Key only lasts for a limited number of weeks.

## Installation

1. In Github, fork this [repo](https://github.com/Chiemezuo/terminal-gpt).

2. Clone the repo into a folder of your choice:

```bash
  git clone https://github.com/Chiemezuo/terminal-gpt.git
```
3. Install the project dependencies on your local machine:

```bash
  npm install
```
4. Add the project globally:

```bash
  npm i -g
```
5. Copy the contents of the [.env.example](.env.example) and paste in a new file named **`.env`**.

6. You can use [this](https://platform.openai.com/account/api-keys) to create your OpenAI API key, copy it, then paste at the end of the line in the **`.env`** file. e.g
```bash
  API_KEY=####################
```
7. Set an environment variable called **`API_KEY`** on your computer. See these for [Windows](https://geekflare.com/system-environment-variables-in-windows/), [Ubuntu](https://mkyong.com/linux/how-to-set-environment-variable-in-ubuntu/), or [Mac](https://saturncloud.io/blog/setting-environment-variables-on-os-x/)

8. You're all set.

## Usage

1. Open your terminal and type `jarvis`.

2. Enter any text into the prompt. e.g
```bash
  What are you?
```

3. Type `Ctrl + C` in Windows/Linux or `Cmd + Q` in Mac to close the chat bot session.

## Feedback

If you have any feedback, issues, or suggestions, please reach out to me on [Twitter](https://twitter.com/CNA_tion).

## License

[MIT](https://choosealicense.com/licenses/mit/)
