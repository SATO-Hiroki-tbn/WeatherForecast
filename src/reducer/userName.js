// プロパティuserNameを更新するReducer関数
export default function userName(state='', action) {
  switch(action.type) {
    case 'SAVE_USER_NAME': return action.userName
    default: return state
  }
}