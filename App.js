// @flow
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store.js';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen.js';
import CounterSettingScreen from './src/components/CounterSettingScreen.js';
import HomeSettingScreen from './src/components/HomeSettingScreen.js';
import { MenuProvider } from 'react-native-popup-menu';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// export default App;

// 初期ルートをホーム画面に指定
const config = {initialRoute: 'Home'};
// 設定画面用TabNavigationを設定（ホーム画面設定、カウンター設定画面）
const SettingScreenNavigator = TabNavigator({
  HomeSetting: {
    screen: HomeSettingScreen,
    navigationOptions: {
      title: 'ホーム画面設定'
    }
  },

  CounterSetting: {
    screen: CounterSettingScreen,
    navigationOptions: {
      title: 'カウンター設定'
    }
  }
});

// ルート情報(全体の画面)
const Routes = StackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {title: 'ホーム画面'},},
  Setting: {screen: SettingScreenNavigator, navigationOptions: {title: '設定画面'},}
  }, config);
  
export default class App extends Component<{}> {
  render() {
    return (
      // Reduxを適用するため、<Provider>でラップする
      <Provider store={ store }>
        <MenuProvider>
          <Routes />
        </MenuProvider>
      </Provider>
    );
  }
}
