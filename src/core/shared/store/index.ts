import { configureStore } from '@reduxjs/toolkit';
import { createLoaderState } from './loader/loader.store';
import packageJson from '../../../../package.json';


      /* istanbul ignore next */
const devTools = process.env.TAG === 'PRO' ? false : { name: packageJson.name };

const store = configureStore({
  reducer: {
    loaderState: createLoaderState.reducer,
  },
  devTools
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppDispatch = typeof store.dispatch;
