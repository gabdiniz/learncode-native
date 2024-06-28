import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '../../theme';


interface Props {
	label: string,
	color?: string,
	disabled?: boolean;
	icon?: JSX.Element;
	onPress?: () => void;
}

export function Button({ label, color, icon, onPress, disabled = false}: Props) {

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: color ? color : colors.primary}]} onPress={onPress} disabled={disabled}>
      <Text style={styles.label}>{label}</Text>
      {icon}
    </TouchableOpacity>
  );
}