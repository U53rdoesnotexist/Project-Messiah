const broadcastChannel = new BroadcastChannel("territorial");

const MESSAGE_TYPES = {
  selectMultiplayer: "SELECT_MULTIPLAYER",
  joinGame: "JOIN_GAME",
};

let justSentMessage = false;
broadcastChannel.onmessage = (message) => {
  if (justSentMessage) {
    justSentMessage = false;
    return;
  }

  switch (message.data.type) {
    case MESSAGE_TYPES.selectMultiplayer:
      window.gameStateManager.startMultiplayer();
      window.uiManager.removeNameInput();
      break;

    case MESSAGE_TYPES.joinGame:
      window.gameManager.joinGame(message.data.gameId);
      break;
  }
};

const postMessage = (message) => {
  justSentMessage = true;
  broadcastChannel.postMessage(message);
};

window.territorial = {
  onClickMultiplayer: () => {
    postMessage({ type: MESSAGE_TYPES.selectMultiplayer });
  },
  onJoinGame: (gameId) => {
    postMessage({ type: MESSAGE_TYPES.joinGame, gameId });
  },
};
