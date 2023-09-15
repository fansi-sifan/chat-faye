import { createSlice } from '@reduxjs/toolkit'

const initialState = selectedSinger => ({
  messages: [
    {
      message: `Hi, I'm ${selectedSinger}. Tell me what's on your mind.`,
      link: null,
      sender: "artist",
      type: "text",
      vectors: null,
      nvectors: null,
      timestamp: Date.now(),
      hint: false,
    }
  ],
  sessionid: null,
});

export const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState(''), // Pass an empty string as the initial selectedSinger
  reducers: {
    addChat: (state, action) => {
      state.messages.push(action.payload);
    },
    setSessionId: (state, action) => {
      state.sessionid = action.payload;
    },
    resetChat: (state, action) => {
      return initialState(action.payload); // Use the selectedSinger passed to the action to set the initial state
    },
  },
})

export const { addChat, setSessionId, resetChat } = chatSlice.actions

export default chatSlice.reducer