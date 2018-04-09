/**
 * @flow
 */
import React, {StyleSheet} from 'react-native';

export const ButtonStyle = StyleSheet.create({

  buttonDefault: {
    borderRadius: 5
  },

  headerButtonSize: {
    width: 60,
    height: 40,
    marginRight: 10,
    padding: 10
  },

  headerButtonText: {
    color: 'white',
    fontSize: 15.0,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  sampleButtonSpace: {
    marginTop: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sampleButtonSize: {
    width: 360,
    height: 90
  },

  sampleButtonText: {
    color: 'white',
    fontSize: 24.0,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 32
  }
});