// @flow
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
// Icon
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
// Styles
import { ButtonStyle } from '../../style/ButtonStyle.js';

export class PopupMenu extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Menu
          onSelect={(value) => navigate(value)}
          style={styles.menuList}>
          <MenuTrigger style={[styles.trigger, ButtonStyle.buttonDefault]}>
            <Icon
              name="ellipsis-v"
              color="#fff"
              size={24.0}
              style = {styles.headerButton}/>
          </MenuTrigger>
          <MenuOptions>
            {this.props.screens.map((screen) => (
              <MenuOption key={screen.toString()} value={screen.value}>
                <View style={[styles.optionView, screen.style]}>
                  <Icon name={screen.iconName} color={screen.iconColor} size={screen.iconSize} style={styles.optionIcon} />
                  <Text style={styles.optionText}>{screen.text}</Text>
                </View>
              </MenuOption>
            ))}
          </MenuOptions>
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  trigger: {
    width: 40,
    height: 40,
    backgroundColor: '#0099ff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuList: {
    marginRight: 10,
  },

  optionText: {
    fontSize: 20,
    textAlign: 'center'
  },

  optionIcon: {
    paddingRight: 10
  },

  optionView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
})