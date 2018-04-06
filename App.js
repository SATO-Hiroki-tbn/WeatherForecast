// @flow
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store.js';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen.js';
import SettingScreen from './src/components/SettingScreen.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// export default App;

// 初期ルートをホーム画面に指定
const config = {initialRoute: 'Home'};
// ルート情報(全体の画面)
const Routes = StackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {title: 'ホーム画面'},},
  Setting: {screen: SettingScreen, navigationOptions: {title: '設定画面'},}
  }, config);
  
export default class App extends Component<{}> {
  render() {
    return (
      // Reduxを適用するため、<Provider>でラップする
      <Provider store={ store }>
        <Routes />
      </Provider>
    );
  }
}
