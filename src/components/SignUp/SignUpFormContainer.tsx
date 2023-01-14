import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginInput from '../LoginInput';
import { Icon } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { phoneMask } from '../../utils/utils';

type SignUpScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

type SignUpDataProps = {
  name: string;
  email: string;
  address: string;
  address_complement: string;
  phone: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome completo'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  address: yup.string().required('Informe o seu endereço'),
  address_complement: yup.string(),
  phone: yup
    .string()
    .required('Informe o seu telefone com DDD')
    .min(13, 'O telefone está incompleto'),
  password: yup
    .string()
    .required('Informe uma senha')
    .min(6, 'A senha deve ter pelo menos 6 caractéres'),
  password_confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não são iguais'),
});

function SignUpFormContainer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  const navigation = useNavigation<SignUpScreenNavigationType>();

  function handleSignUp(data: SignUpDataProps) {
    console.log(data);
    Alert.alert('Conta criada com sucesso', 'Faça o login para prosseguir', [
      {
        text: 'Ok',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="Nome completo"
            placeholder="Ex: Fulano da Silva"
            InputLeftElement={
              <Icon as={<AntDesign name="user" />} size={5} mr={2} />
            }
            onChangeText={onChange}
            errorMessage={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="E-mail"
            placeholder="Ex: fulano@email.com"
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email-outline" />}
                size={5}
                mr={2}
              />
            }
            onChangeText={onChange}
            errorMessage={errors.email?.message}
            keyboardType="email-address"
          />
        )}
      />

      <Controller
        control={control}
        name="address"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="Endereço"
            placeholder="Ex: Rua Paula Ney, 940"
            InputLeftElement={
              <Icon as={<Feather name="map-pin" />} size={5} mr={2} />
            }
            onChangeText={onChange}
            errorMessage={errors.address?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="address_complement"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="Complemento"
            placeholder="Ex: Apt 101, Bloco A"
            InputLeftElement={
              <Icon as={<Feather name="map-pin" />} size={5} mr={2} />
            }
            onChangeText={onChange}
            errorMessage={errors.address_complement?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="phone"
        render={({ field: { value, onChange } }) => (
          <LoginInput
            title="Telefone"
            placeholder="Digite seu número com DDD"
            InputLeftElement={
              <Icon as={<AntDesign name="phone" />} size={5} mr={2} />
            }
            value={phoneMask(value ?? '')}
            onChangeText={onChange}
            errorMessage={errors.phone?.message}
            keyboardType="phone-pad"
            maxLength={14}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="Senha"
            placeholder="Crie uma senha"
            InputLeftElement={
              <Icon as={<AntDesign name="lock" />} size={5} mr={2} />
            }
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            secureTextEntry
          />
        )}
      />
      <Controller
        control={control}
        name="password_confirm"
        render={({ field: { onChange } }) => (
          <LoginInput
            title="Confirmar senha"
            placeholder="Confirme a senha"
            InputLeftElement={
              <Icon as={<AntDesign name="lock" />} size={5} mr={2} />
            }
            onChangeText={onChange}
            errorMessage={errors.password_confirm?.message}
            secureTextEntry
          />
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleSignUp)}
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
