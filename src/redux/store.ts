import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './homeSlice'
import sidebarReducer from './sidebarSlice';
import trendingReducer from './trendingSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    sidebar: sidebarReducer,
    trending: trendingReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;