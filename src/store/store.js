import { createStore } from 'redux';
import reducer from '../reducer/index';

/* createStore(reducer, preloadedState, enhancer)
 * 
 * @param reducer  : next State Tree
 * @param preloadedState : initial State ⇒ reducer側で初期状態を定義しているため、引数の指定はしていない
 * @param enhancer : Storeに特別な定義をする場合に指定する。(applyMiddleware()によるenhancerが唯一指定可能)
 *
 * description : combineReducerでまとめたreducerオブジェクトをstoreに設定 
 */
export const store = createStore(reducer);