import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './homeSlice'
import sidebarReducer from './sidebarSlice';
import trendingReducer from './trendingSlice';
import tvReducer from './tvSlice'
import popularReducer from './popularSlice'
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    sidebar: sidebarReducer,
    trending: trendingReducer,
    tv: tvReducer,
    popular: popularReducer,
    modal: modalReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;