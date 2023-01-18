import { View, Image, Text, StyleSheet } from 'react-native';
import { LoginLogo } from '../../assets/Images';

function LoginWelcome() {
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
        Vamos entrar
      </Text>
      <Text style={styles.text}>Bem vindo de volta, sentimos sua falta!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeMessage: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default LoginWelcome;
