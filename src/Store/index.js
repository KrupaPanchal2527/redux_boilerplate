// Import function which will create your store 
import { createStore, applyMiddleware } from 'redux';

// import 'root reducer'
import rootReducer from './reducers/rootReducer';

// import middlewares
import thunk from 'redux-thunk';

// import redux-persistor because why not!? 
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //default 'localStorage'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// devtools - if not applied you won't be able to see state tree in chrome's redux extension
import { composeWithDevTools } from "redux-devtools-extension";


const middlewares = [thunk];

const persistConfig = {
    key: 'primary',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['test']
}
/*
 To learn more about API of redux-persister,where it gives info about
 1. black list, whitelist - workes only one level deep
 2. merge levels
 3. persisting or apply black/white list to a deeper level - individual reducer persisting

 go to : https://www.npmjs.com/package/redux-persist
*/

// persist reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

// now persist you store
export const persistedStore = persistStore(store);
