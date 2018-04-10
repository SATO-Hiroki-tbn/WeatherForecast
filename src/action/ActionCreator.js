/* ActionCreator */
// カウンターをインクリメントするアクション
export const incrementAction = () => {
  return {
    type: "INCREMENT"
  }
}

// カウンターをリセットするアクション
export const resetCounterAction = () => {
  return {
    type: "RESET_COUNTER"
  }
}

// チェック状態を変更するアクション
export const changeCheckedAction = () => {
  return {
    type: "CHANGE_CHECKED"
  }
}

// ホーム画面の色を赤に変更するアクション
export const changeHomeBackgroudColorToRedAction = () => {
  return {
    type: "CHANGE_BACKGROUND_HOME_TO_RED",
  }
}

// ホーム画面の色を元に戻すアクション
export const changeHomeBackgroudColorToDefaultAction = () => {
  return {
    type: "CHANGE_BACKGROUND_HOME_TO_DEFAULT",
  }
}

// ユーザ名を保存するアクション
export const saveUserNameAction = (text) => {
  return {
    type: "SAVE_USER_NAME",
    userName: text
  }
}
