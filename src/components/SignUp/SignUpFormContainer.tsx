import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginInput from '../LoginInput';
import { useState } from 'react';

type SignUpScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

function SignUpFormContainer() {
  const navigation = useNavigation<SignUpScreenNavigationType>();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    password2: '',
  });

  const handleFormChange = (
    newValue: string,
    form: keyof typeof formValues
  ) => {
    setFormValues({ ...formValues, [form]: newValue });
  };

  return (
    <View style={styles.container}>
      <LoginInput
        cabecario="Nome completo"
        icon={
          <AntDesign
            name="user"
            size={18}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        inputOptions={{
          placeholder: 'Digite seu nome completo',
          onChangeText: (newValue: string) =>
            handleFormChange(newValue, 'name'),
        }}
      />
      <LoginInput
        cabecario="E-mail"
        icon={
          <MaterialCommunityIcons
            name="email-newsletter"
            size={18}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        inputOptions={{
          placeholder: 'Ex: Fulano Silva Torres',
          keyboardType: 'email-address',
          onChangeText: (newValue: string) =>
            handleFormChange(newValue, 'email'),
        }}
      />
      <LoginInput
        cabecario="Endereço"
        icon={
          <FontAwesome
            name="map-marker"
            size={18}
            color={COLORS.gray_300}
            style={{ ...styles.inputStartIcon, paddingRight: 10 }}
          />
        }
        inputOptions={{
          placeholder: 'Ex: Rua Costa Barros, 302',
          onChangeText: (newValue: string) =>
            handleFormChange(newValue, 'address'),
        }}
      />
      <LoginInput
        cabecario="Telefone"
        icon={
          <AntDesign
            name="phone"
            size={18}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        inputOptions={{
          placeholder: 'Ex: (85) 91234-1234',
          keyboardType: 'phone-pad',
          onChangeText: (newValue: string) =>
            handleFormChange(newValue, 'phone'),
        }}
      />
      <LoginInput
        cabecario="Senha"
        icon={
          <AntDesign
            name="lock"
            size={18}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        inputOptions={{
          placeholder: 'Digite sua senha',
          onChangeText: (newValue: string) =>
            handleFormChange(newValue, 'password'),
          secureTextEntry: true,
        }}
      />
      <LoginInput
        cabecario="Confirmar senha"
        icon={
          <AntDesign
            name="lock"
            size={18}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        inputOptions={{
          placeholder: 'Confirme sua senha',
          onChangeText: (newValue: string) =>
            handleFormChange(newValue, 'password2'),
          secureTextEntry: true,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log(formValues);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
      <Text>
        <Text>Já possui uma conta? </Text>
        <Text
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.criarContaText}
        >
          Entrar.
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
    marginVertical: 30,
    alignSelf: 'center',
    padding: 20,
  },
  inputStartIcon: {
    borderColor: 'black',
    borderBottomWidth: 1,
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

export default SignUpFormContainer;
