const { Configuration, OpenAIApi } = require('openai')
const { apiKey, AIConfigs } = require('../Config/config')

class AI {
  static #model = "gpt-3.5-turbo"
  static #messages = [
    {
      role: 'system',
      content: 'Your name is "Jarvis". \
                  and you were created on the dining table of someone called "Chiemezuo". \
                  You are a helpful bot who answers questions \
                  Do not refer to yourself as anything else, \
                  not even "assistant."Any time I ask you what my name is,\
                  the answer is "Mezuo."'
    },
  ]

  static #configuration = new Configuration({
    apiKey
  })

  static #openAI = new OpenAIApi(this.#configuration)


  // method for getting the response
  static async getResponse(text) {
    const response = await this.#openAI.createChatCompletion(
      {
        model: this.#model,
        messages: text,
        ...AIConfigs
      }
    )

    return response.data.choices[0].message.content
  }


  // method for processing chat
  static async chat(text) {
    this.#messages = this.#messages.concat({
      role: 'user',
      content: text
    })
    const response = await this.getResponse(this.#messages)
    return response
  }

  /**
   * @todo add a check for error and respond with an error message
   */
}

module.exports = AI;