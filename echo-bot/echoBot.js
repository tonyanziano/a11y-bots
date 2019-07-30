class EchoBot {
  constructor(_conversationState, userState) {
    // Create the state property accessors for the user profile.
    this.userProfile = userState.createProperty('testProperty');

    // The state management objects for the user state.
    this.userState = userState;
  }

  onTurn() {
    return async (context) => {
      if (context.activity.type === 'message') {
        await context.sendActivity(`ECHO: ${context.activity.text}`);
      } else {
        await context.sendActivity(`[${context.activity.type} event detected]`);
      }
    };
  }
}

module.exports = EchoBot;