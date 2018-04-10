import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from '../reducer/index';

/* createStore(reducer, preloadedState, enhancer)
 * 
 * @param reducer  : next State Tree
 * @param preloadedState : initial State ⇒ reducer側で初期状態を定義しているため、引数の指定はしていない
 * @param enhancer : Storeに特別な定義をする場合に指定する。(applyMiddleware()によるenhancerが唯一指定可能)
 *
 * description : combineReducerでまとめたreducerオブジェクトをstoreに設定 
 */

// redux-persist導入前
// export const store = createStore(reducer);

// redux-persist導入後
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userName', 'count'], // userNameとcountのStateのみStorageに保存する
  // blacklist: ['backgroundColor'] // backgroundColorのStateはStorageに保存しない　⇒ whitelistかどっちかでよさそう
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;