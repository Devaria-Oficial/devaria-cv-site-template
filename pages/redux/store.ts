import {
  configureStore
} from '@reduxjs/toolkit';
import AppReducer from "./reducer";

export interface IDefaultState {
  isLight: boolean;
  defaultTheme?: string;
  bodyClass?: string;
}

export interface IDefaultReducer {
  AppReducer: IDefaultState;
}

export const getStore = () => configureStore({
  reducer: {
    AppReducer,
  },
});
