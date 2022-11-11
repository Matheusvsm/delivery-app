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
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    password2: '',
  });
  const navigation = useNavigation<SignUpScreenNavigationType>();

  const handleTextChange = (form: keyof typeof formState, value: string) => {
    setFormState({ ...formState, [form]: value });
  };

  return (
    <View style={styles.container}>
      <LoginInput
        value={formState.nome}
        onChangeText={(text: string) => handleTextChange('nome', text)}
        cabecario="Nome completo"
        icon={
          <AntDesign
            name="user"
            size={27}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        placeholder="Ex: Fulano Silva Torres"
      />
      <LoginInput
        value={formState.email}
        onChangeText={(text: string) => handleTextChange('email', text)}
        cabecario="E-mail"
        icon={
          <MaterialCommunityIcons
            name="email-newsletter"
            size={27}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        placeholder="Ex: Fulano Silva Torres"
        keyboardType="email-address"
      />
      <LoginInput
        value={formState.address}
        onChangeText={(text: string) => handleTextChange('address', text)}
        cabecario="Endereço"
        icon={
          <FontAwesome
            name="map-marker"
            size={27}
            color={COLORS.gray_300}
            style={{ ...styles.inputStartIcon, paddingRight: 10 }}
          />
        }
        placeholder="Ex: Rua Costa Barros, 302"
      />
      <LoginInput
        value={formState.phone}
        onChangeText={(text: string) => handleTextChange('phone', text)}
        cabecario="Telefone"
        icon={
          <AntDesign
            name="phone"
            size={27}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        placeholder="Ex: (85) 91234-1234"
        keyboardType="phone-pad"
        inputProps={{ maxLength: 11 }}
      />
      <LoginInput
        value={formState.password}
        onChangeText={(text: string) => handleTextChange('password', text)}
        cabecario="Senha"
        icon={
          <AntDesign
            name="lock"
            size={27}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        placeholder="Digite sua senha"
      />
      <LoginInput
        value={formState.password2}
        onChangeText={(text: string) => handleTextChange('password2', text)}
        cabecario="Confirmar senha"
        icon={
          <AntDesign
            name="phone"
            size={27}
            color={COLORS.gray_300}
            style={styles.inputStartIcon}
          />
        }
        placeholder="Confirme sua senha"
      />
      <TouchableOpacity
        onPress={() => {
          console.log(formState);
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
    marginTop: 20,
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

export default SignUpFormContainer;
