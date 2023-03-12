import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({children, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onPress}>
        <Text style={styles.btnText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#131313',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
  },
});
