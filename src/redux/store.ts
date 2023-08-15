import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './homeSlice'
import sidebarReducer from './sidebarSlice';
import trendingReducer from './trendingSlice';
import tvReducer from './tvSlice'
import popularReducer from './popularSlice'
import modalReducer from './modalSlice';
import movieDetailReducer from './movieDetailSlice'
import mobileReducer from './mobileSlice'
import toggleReducer from './toggleSlice';
import changeIconReducer from './changeIconSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    loading: homeReducer,
    sidebar: sidebarReducer,
    mobile: mobileReducer,
    trending: trendingReducer,
    tv: tvReducer,
    popular: popularReducer,
    modal: modalReducer,
    movieDetail: movieDetailReducer,
    toggle: toggleReducer,
    icon: changeIconReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;