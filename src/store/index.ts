import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { modalReducer } from './modalSlice'

export const store = configureStore({
  reducer: {
    modalReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
