import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export function ButtonClose({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.close}>X</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 58,
    backgroundColor: '#c5283d',
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F5FCFF',
  },
});
