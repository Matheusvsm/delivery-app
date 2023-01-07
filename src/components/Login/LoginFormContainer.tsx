import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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

type LoginScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type LoginDataProps = {
  user: string;
  password: string;
};

const loginSchema = yup.object({
  user: yup.string().required('Informe o usuário'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve conter pelo menos 6 caractéres')
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

  function handleLogin(data: LoginDataProps) {
    console.log(data);
    navigation.navigate('Main');
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="user"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="Usuário"
            InputLeftElement={
              <Icon as={<AntDesign name="user" />} size={5} mr={2} />
            }
            placeholder="Digite o usuário"
            onChangeText={onChange}
            errorMessage={errors.user?.message}
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
