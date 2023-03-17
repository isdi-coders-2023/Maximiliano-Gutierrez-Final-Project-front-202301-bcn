import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import { playlistsReducer } from "./features/playlistsSlice.tsx/playlistsSlice";
import { uiReducer } from "./features/uiSlice.tsx/uiSlice";
import { userReducer } from "./features/userSlice/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  playlist: playlistsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
