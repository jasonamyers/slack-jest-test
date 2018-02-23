const SlackNotifier = require("./slackNotifier");

const channelId = process.env.SLACK_DEFAULT_CHANNEL;

SlackNotifier(channelId, "Hello World");
