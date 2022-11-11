import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignUpFormContainer from '../components/SignUp/SignUpFormContainer';
import SignUpWelcome from '../components/SignUp/SignUpWelcome';
import { COLORS } from '../constants/Colors';

function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpWelcome />
      <SignUpFormContainer />
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

export default SignUpScreen;
