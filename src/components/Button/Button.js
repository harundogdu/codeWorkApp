import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';
const Button = ({icon, text, onPress, disabled = false}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <Icon name={icon} size={24} color="#fff" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
