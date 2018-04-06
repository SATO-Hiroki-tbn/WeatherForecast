import store from '../store/store.js';
import * as ActionCreator from './ActionCreator.js';

/* store.getState()の結果(state)を第一引数に、
 * Container componentへ渡されたpropsを第二引数にして呼び出される関数
 * stateとpropsを使って子のPresentational componentにpropsとして渡す値を生成する。
 */
export function mapStateToProps(state) {
  console.log("masapStateToProps:");
  return state;
}

/* store.dispatchを第一引数にして呼び出される関数
 * 子のPresentational componentにpropsとして渡す値を生成する
 * ここで定義したメソッド(例：increment)には、呼び出し元のコンポーネントからthis.props.incrementでアクセス可能
 */
export function mapDispatchToProps(dispatch) {
  return {
    /* カウンターをインクリメント */
    increment: () => {
      console.log("before : dispatch( incrementAction );");
      dispatch( ActionCreator.incrementAction() );
    },
    /* カウンターをリセット */
    resetCounter: () => {
      console.log("before : dispatch( resetCounterAction );");
      dispatch( ActionCreator.resetCounterAction() );
    },
    /* チェック状態を変更 */
    changeChecked: () => {
      console.log("before : dispatch( changeCheckedAction() );");
      dispatch( ActionCreator.changeCheckedAction() );
    },
    /* ホーム画面の背景色を赤に変更 */
    changeColorToRed: () => {
      console.log("before : dispatch( changeHomeBackgroudColorToRedAction() );");
      dispatch( ActionCreator.changeHomeBackgroudColorToRedAction() );
    },
    /* ホーム画面の背景色をデフォルトに変更 */
    changeColorToDefault: () => {
      console.log("before : dispatch( changeHomeBackgroudColorToDefaultAction() );");
      dispatch( ActionCreator.changeHomeBackgroudColorToDefaultAction() );
    },
  }
}