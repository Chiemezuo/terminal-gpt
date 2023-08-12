require('dotenv').config()

const AIConfigs = {
  temperature: 0.6,
  max_tokens: 3600,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
}

module.exports = {
  apiKey: process.env.API_KEY,
  AIConfigs
}