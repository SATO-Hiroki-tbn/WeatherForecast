// import { combineReducers } from 'redux'

/* ステートの初期化は、各プロパティに対応するReducer関数の引数で行えば、これは不要となる */
// const initialState = {
//   checked: false,
//   backgroundColor: '#F5FCFF',
//   count: 0
// }

// プロパティcheckedを更新するReducer関数
export default function checked(state=false, action) {
  switch(action.type) {
    case 'CHANGE_CHECKED': return !state
    default: return state
  }
}