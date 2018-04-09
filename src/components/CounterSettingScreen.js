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

class CounterSettingScreen extends Component<{}> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ホーム画面のカウンターを+1する</Text>
        <Button title="カウントアップ" onPress={ () => this.props.increment() } />
        <Button title="ホーム画面へ" onPress={ () => navigate('Home') } />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterSettingScreen);