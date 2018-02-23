const SlackNotifier = require("../slackNotifier.js");

jest.mock("@slack/client");
const { WebClient, PostMessage } = require("@slack/client");

beforeEach(() => {});

it("We can send message", () => {
  SlackNotifier("test", "TestCookies");
  expect(WebClient).toHaveBeenCalledTimes(1);
  console.log(WebClient.mock.calls);
  console.log(PostMessage.mock.calls);
});
