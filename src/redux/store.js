import { createStore } from 'redux'
import reducerApp from '@redux/reducers';

const storeApp = createStore(reducerApp);
storeApp.subscribe(() => {
  console.log(storeApp.getState())
});

export default storeApp;