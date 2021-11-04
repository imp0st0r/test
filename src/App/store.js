import { configureStore } from '@reduxjs/toolkit'
import contentReducer from '../Component/contentChange'

export default configureStore({
  reducer: {
    content: contentReducer
  }
})