import { SafeAreaView, StyleSheet } from 'react-native';
import LoginFormContainer from '../components/Login/LoginFormContainer';
import LoginWelcome from '../components/Login/LoginWelcome';
import Screen from '../components/Screen';
import { COLORS } from '../constants/Colors';

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <LoginWelcome />
      <LoginFormContainer />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue_default,
  },
});

export default LoginScreen;
