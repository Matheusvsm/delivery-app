import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginInput from '../LoginInput';

type LoginScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

function LoginFormContainer() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<LoginScreenNavigationType>();

  const handleLoginChange = (value: string) => {
    setLogin(value);
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <LoginInput
        cabecario="Usuário ou e-mail"
        icon={<AntDesign name="user" size={20} color={COLORS.gray_300} />}
        value={login}
        inputOptions={{
          placeholder: 'Usuário ou e-mail',
          keyboardType: 'email-address',
          onChangeText: handleLoginChange,
        }}
      />
      <LoginInput
        cabecario="Senha"
        icon={<AntDesign name="lock" size={20} color={COLORS.gray_300} />}
        value={password}
        inputOptions={{
          placeholder: 'Insira sua senha',
          secureTextEntry: true,
          onChangeText: handlePasswordChange,
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text>
        <Text>Não tem uma conta? </Text>
        <Text
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={styles.criarContaText}
        >
          Criar conta.
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '80%',
    marginVertical: 50,
    padding: 20,
  },
  button: {
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
  criarContaText: {
    fontWeight: 'bold',
    color: COLORS.blue_default,
  },
});

export default LoginFormContainer;
