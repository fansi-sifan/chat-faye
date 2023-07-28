import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [
      {
        message: "我是王菲，芃芃你想跟我说点什么？",
        link: null,
        sender: "王菲",
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