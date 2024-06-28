import { Eye, EyeSlash } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  editable?: boolean;
  secureTextEntry?: boolean;
  setValue:  React.Dispatch<React.SetStateAction<string>>;
}

export function Input({ label, setValue, value, secureTextEntry = false, editable = true }: Props) {

  const [secureText, setSecureText] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} value={value} onChangeText={setValue} secureTextEntry={secureText} editable={editable} />
        {
          secureTextEntry &&
          <TouchableOpacity onPress={() => setSecureText((value) => !value)} style={styles.icon}>
            {
              secureText ?
                <EyeSlash size={20} color='black' /> :
                <Eye size={20} color='black' />
            }
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}