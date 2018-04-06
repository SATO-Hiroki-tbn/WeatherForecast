// プロパティcountを更新するReducer関数
count = (state=0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1
    case 'RESET_COUNTER': return 0
    default: return state
  }
}

// プロパティbackgroundColorを更新するReducer関数
backgroundColor = (state='#F5FCFF', action) => {
  switch(action.type) {
    case 'CHANGE_BACKGROUND_HOME_TO_RED': return '#FF0000'
    case 'CHANGE_BACKGROUND_HOME_TO_DEFAULT': return '#F5FCFF'
    default: return state
  }
}

export default HomeScreenReducer ({count, backgroundColor}, action);
