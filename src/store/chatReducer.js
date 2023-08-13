import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [
      {
        message: "Find you the pefect song.",
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
  },
  reducers: {
    addChat: (state, action) => {
      state.messages.push(action.payload);
    },
    setSessionId: (state, action) => {
      state.sessionid = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addChat, setSessionId } = chatSlice.actions

export default chatSlice.reducer