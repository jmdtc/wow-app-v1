import { configureStore } from "@reduxjs/toolkit"
import navigationReducer from "../slices/navigation"

const store = configureStore({
  reducer: {
    navigation: navigationReducer
  }
})
export default store

export type RootState = ReturnType<typeof store.getState>