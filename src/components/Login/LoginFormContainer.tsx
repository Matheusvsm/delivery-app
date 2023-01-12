import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginInput from '../LoginInput';
import { Icon } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuthentication } from '../../contexts/AuthContext';

type LoginScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type LoginDataProps = {
  email: string;
  password: string;
};

const loginSchema = yup.object({
  email: yup.string().required('Digite seu e-mail').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve conter pelo menos 6 caractéres'),
});

function LoginFormContainer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataProps>({
    resolver: yupResolver(loginSchema),
  });

  const navigation = useNavigation<LoginScreenNavigationType>();
  const { LoginUser } = useAuthentication();

  function handleLogin(data: LoginDataProps) {
    if (LoginUser(data.email, data.password)) {
      navigation.navigate('Main');
    } else {
      Alert.alert('Usuário não encontrado', 'Verifique os dados', [
        {
          text: 'Ok',
        },
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="E-mail"
            InputLeftElement={
              <Icon as={<AntDesign name="user" />} size={5} mr={2} />
            }
            placeholder="Digite o seu e-mail"
            onChangeText={onChange}
            errorMessage={errors.email?.message}
            keyboardType="email-address"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="Senha"
            InputLeftElement={
              <Icon as={<AntDesign name="lock" />} size={5} mr={2} />
            }
            placeholder="Digite a senha"
            secureTextEntry
            onChangeText={onChange}
            errorMessage={errors.password?.message}
          />
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogin)}
      >
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
