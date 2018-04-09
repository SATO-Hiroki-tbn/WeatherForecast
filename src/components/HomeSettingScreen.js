// @flow
import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import { styles } from '../../style/styles';
import { MKSwitch } from 'react-native-material-kit';
import { mapStateToProps, mapDispatchToProps } from '../action/action.js';
import { connect } from 'react-redux';
import store from '../store/store.js';

class HomeSettingScreen extends Component<{}> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ホーム画面の色を赤にする</Text>
        {/* <MKSwitch checked={this.props.checked} onCheckedChange={ () => this._changeColor().bind(this) }/> */}
        <MKSwitch checked={this.props.checked} onCheckedChange={() => this.changeColor() }/>
        <Button title="ホーム画面へ" onPress={ () => navigate('Home') } />
      </View>
    );
  }

  // 関数内のthisは、呼び出し元と同じ。
  changeColor() {

    flg1 = this.props.checked;
    console.log({flg1});
    // チェックフラグの更新
    this.props.changeChecked();
    
    flg2 = this.props.checked;
    console.log({flg2});
    // ホーム画面の背景色の変更
    !this.props.checked ? this.props.changeColorToRed() : this.props.changeColorToDefault();
    // !checked ? this.props.changeColorToRed() : this.props.changeColorToDefault();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSettingScreen);