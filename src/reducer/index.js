import { combineReducers } from 'redux';
import backgroundColor from './backgroundColorReducer';
import checked from './checkedReducer';
import count from './countReducer';
import userName from './userName';

// 各reducerをまとめたreducerオブジェクトを返す
export default combineReducers({
  backgroundColor,
  checked,
  count,
  userName,
})