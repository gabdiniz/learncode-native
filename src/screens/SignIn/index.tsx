import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Text, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Faça login</Text>
        <Input label='E-mail:' value={email} setValue={setEmail} />
        <Input label='Senha:' value={password} setValue={setPassword} />
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Button label='Entrar' />
        <TouchableOpacity style={styles.newAccountButton} onPress={() => navigation.navigate('signUp')}>
          <Text style={styles.newAccountText}>Não tem uma conta?</Text>
          <Text style={styles.newAccountTextPrimary}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}