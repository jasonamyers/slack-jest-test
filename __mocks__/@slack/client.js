const mockPostMessage = jest.fn(() => Promise.resolve({ ts: "postCompleted" }));
const mockChat = {
  postMessage: mockPostMessage
};

const mock = jest.fn().mockImplementation(() => {
  return { chat: mockChat };
});

module.exports = {
  WebClient: mock,
  PostMessage: mockPostMessage,
  Chat: mockChat
};
