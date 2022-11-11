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

type SignUpScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

function SignUpFormContainer() {
  const navigation = useNavigation<SignUpScreenNavigationType>();

  return (
    <View style={styles.container}>
      <LoginInput
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
        placeholder="Digite sua senha"
      />
      <LoginInput
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
      <TouchableOpacity style={styles.button}>
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
