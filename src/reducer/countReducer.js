// プロパティcountを更新するReducer関数
export default function count(state=0, action) {
  switch(action.type) {
    case 'INCREMENT': return state + 1
    case 'RESET_COUNTER': return 0
    default: return state
  }
}