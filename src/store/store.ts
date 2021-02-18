import { configureStore } from "@reduxjs/toolkit"
import pagesReducer from "../slices/pages"

export default configureStore({
  reducer: {
    pages: pagesReducer
  }
})

