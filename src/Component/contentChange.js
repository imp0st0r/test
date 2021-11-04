import { createSlice } from '@reduxjs/toolkit'

export const contentChange = createSlice({
  name: 'content',
  initialState: {
    caption: "",
    visible: true,
    width: 0,
    height: 0,
  },
  reducers: {
    caption: (state, action) => {
      state.caption = action.payload
    },
    visible: (state, action) => {
      state.visible = action.payload
    },
    width: (state, action) => {
      state.width = action.payload
    },
    height: (state, action) => {
        state.height = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { caption, visible, width,  height} = contentChange.actions

export default contentChange.reducer