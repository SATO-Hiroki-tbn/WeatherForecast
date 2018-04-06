// @flow
import React, { Component } from 'react';
import {
  Button, 
  Text,
  View
} from 'react-native';
import { styles } from '../../style/styles';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../action/action.js';

class HomeScreen extends Component<{}> {
  render() {
    // プロパティnavigationは、react-navigationによる画面遷移の際に自動的に渡される
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.backgroundColor}}>
        <Text style={styles.text}>{this.props.count}</Text>
        <Button title="カウンターリセット" onPress={ () => this.props.resetCounter() } />        
        <Button title="設定画面へ" onPress={ () => navigate('Setting') } />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);