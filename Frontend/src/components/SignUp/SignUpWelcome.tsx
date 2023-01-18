import { View, Image, Text, StyleSheet } from 'react-native';
import { LoginLogo } from '../../assets/Images';

function SignUpWelcome() {
  return (
    <View style={styles.welcomeMessage}>
      <Image source={LoginLogo} />
      <Text
        style={[
          styles.text,
          {
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10,
          },
        ]}
      >
        Criação de conta
      </Text>
      <Text style={styles.text}>Crie uma conta para continuar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeMessage: {
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    color: 'white',
  },
});

export default SignUpWelcome;
