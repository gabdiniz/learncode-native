import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../../components/Input';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { ArrowRight } from 'iconsax-react-native';
import { colors } from '../../theme';
import { apiService } from '../../api/apiService';

export function SignUp() {

  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  function onSubmit() {
    const data = {
      first_name: name.split(' ')[0],
      last_name: name.split(' ').slice(1).join(' ').trim(),
      email: email.toLocaleLowerCase().trim(),
      password
    };
    apiService.post('/auth/register', data)
      .then((response) => {
        if (response.message) return Alert.alert('Alerta', response.message);
      })
      .catch((error) => {
        Alert.alert('Error:', error.message);
      });
  }

  function validateStep1() {
    if (!name.trim().split(' ')[1]) return Alert.alert('Nome incorreto', 'Preencha o seu nome completo.');
    if (!email) return Alert.alert('E-mail incorreto', 'Preencha o seu e-mail.');
    if (!validateEmail(email)) return Alert.alert('E-mail inválido', 'Preencha um e-mail válido.');
    setStep(2);
  }

  function validateStep2() {
    if (password.length < 8) return Alert.alert('Senha incorreta', 'Sua senha precisa ter no mínimo 8 digitos.');
    if (password != confirmPassword) return Alert.alert('Senhas incorretas', 'As senhas devem ser iguais.');
    onSubmit();
  }

  function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email.trim()).toLowerCase());
  }

  function showForgotPassword() {
    return (
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Já tem uma conta?</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Faça seu cadastro</Text>
        {
          step === 1 &&
          <>
            <Input label='Nome Completo:' value={name} setValue={setName} />
            <Input label='E-mail:' value={email} setValue={setEmail} />
            {showForgotPassword()}
            <Button label='Próximo' icon={<ArrowRight color='white' />} onPress={validateStep1} />
          </>
        }
        {
          step === 2 &&
          <>
            <Input label='Senha:' value={password} setValue={setPassword} secureTextEntry={true} />
            <Input label='Confirmar senha:' value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true} />
            {showForgotPassword()}
            <Button label='Concluir cadastro' onPress={validateStep2} />
            <Button label='Voltar' onPress={() => setStep(1)} color={colors.darkGray} />
          </>
        }
      </View>
    </Background>
  );
}