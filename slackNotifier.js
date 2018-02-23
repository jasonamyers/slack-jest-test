const { WebClient } = require("@slack/client");

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token = process.env.SLACK_BOT_TOKEN;

const web = new WebClient(token);

// The first argument can be a channel ID, a DM ID, a MPDM ID, or a group ID

module.exports = (channel, text) => {
  web.chat
    .postMessage(channel, text)
    .then(res => {
      // `res` contains information about the posted message
      console.log("Message sent: ", res.ts);
    })
    .catch(console.error);
};
