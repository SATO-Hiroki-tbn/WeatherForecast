// @flow
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {
  Button, 
  Text,
  View
} from 'react-native';
import { styles } from '../../style/styles';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action/action.js';
import { NavigationNavigator } from 'react-navigation';
import { PopupMenu } from '../commonComponents/PopupMenu.js';
import store from '../store/store.js';

class HomeScreen extends Component<{}> {
  props: {
    count: number
  };

  static navigationOptions = ({ navigation }: NavigationNavigator) => {
    // 右上ポップメニューの選択項目
    const screens = [
      { value: 'IventInfo', text: '受付', iconName: 'fa', iconColor: '#000', iconSize: 20 },
      { value: 'Setting', text: '設定', iconName: 'gear', iconColor: '#000', iconSize: 20 }
    ];

    return {
      headerRight:
        <PopupMenu navigation={navigation} screens={screens} />
    }
  };

  // 【初期化処理】componentがDOMツリーに追加される前に一度だけ呼ばれる。
  componentWillMount() {
    // userName: AsyncStorage⇒Store
    this._getUserNameFromAsyncStorage(this.props.saveUserName);
  }

  render() {
    console.log("start: HomeScreenのrender()");
    // プロパティnavigationは、react-navigationによる画面遷移の際に自動的に渡される
    const { navigate } = this.props.navigation;
    // const usr :string = this._getUserNameFromAsyncStorage();
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.backgroundColor}}>
        <Text style={styles.text}>カウンター：{this.props.count}</Text>
        <Text style={styles.text}>ユーザ名：{this.props.userName}</Text>
        {/* <Text style={styles.text}>ユーザ名：{usr}</Text> */}
        <Button title="カウンターリセット" onPress={ () => this.props.resetCounter() } />
        <Button title="設定画面へ" onPress={ () => navigate('Setting') } />
      </View>
    );
    console.log("end: HomeScreenのrender()");
  }

  // AsyncStorageからユーザ名を取得し、Storeに保存
  async _getUserNameFromAsyncStorage(saveUserName) {
    console.log("AsyncStorageからユーザ名を取得: _getUserNameFromAsyncStorage(saveUserName);");
    await AsyncStorage.getItem('USER_NAME').then( (result) => {
      console.log(result);
      saveUserName(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);