// プロパティbackgroundColorを更新するReducer関数
export default function backgroundColor(state='#F5FCFF', action) {
  switch(action.type) {
    case 'CHANGE_BACKGROUND_HOME_TO_RED': return '#FF0000'
    case 'CHANGE_BACKGROUND_HOME_TO_DEFAULT': return '#F5FCFF'
    default: return state
  }
}