import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginInput from '../LoginInput';

type LoginScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

function LoginFormContainer() {
  const navigation = useNavigation<LoginScreenNavigationType>();

  return (
    <View style={styles.container}>
      <LoginInput
        cabecario="Usuário ou e-mail"
        icon={
          <AntDesign
            name="user"
            size={27}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        placeholder="Usuário ou e-mail"
        keyboardType="email-address"
      />
      <LoginInput
        cabecario="Senha"
        icon={
          <AntDesign
            name="lock"
            size={27}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        placeholder="Insira sua senha"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MainPage');
        }}
        style={styles.button}
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
  inputStartIcon: {
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingRight: 3,
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
