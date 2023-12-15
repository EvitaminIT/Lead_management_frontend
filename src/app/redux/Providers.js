"use client"
import { persistStore } from 'redux-persist'
import { store } from './Store';

const { Provider } = require("react-redux");
persistStore(store,null); 

export default function Providers({ children }) {
  return<Provider store={store}>
      {children}
  </Provider>
}


