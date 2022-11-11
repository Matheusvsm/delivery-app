import { SafeAreaView, StyleSheet } from 'react-native';
import LoginFormContainer from '../components/Login/LoginFormContainer';
import LoginWelcome from '../components/Login/LoginWelcome';
import { COLORS } from '../constants/Colors';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginWelcome />
      <LoginFormContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue_default,
  },
});

export default LoginScreen;
