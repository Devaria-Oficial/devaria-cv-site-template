import {
  createSlice, PayloadAction
} from '@reduxjs/toolkit';
import { IDefaultState } from './store';

const ISSERVER = typeof window === "undefined";
export const appSlice = () => {
  const isLight = !ISSERVER ? (window.localStorage.getItem("theme-light") === 'true') : true;
  return createSlice({
    name: 'App',
    initialState: {
      isLight: isLight
    },
    // The `reducers` field lets us define reducers and generate associated actions. 
    // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app. 
    // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
      setThemeType: (state: IDefaultState, data: PayloadAction<IDefaultState>) => {
        return {
          ...state,
          ...data.payload
        }
      }
    },
  })
};

export const {
  setThemeType
} = appSlice().actions;

export default appSlice().reducer;
