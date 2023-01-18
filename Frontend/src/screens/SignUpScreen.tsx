import {
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Screen from '../components/Screen';
import SignUpFormContainer from '../components/SignUp/SignUpFormContainer';
import SignUpWelcome from '../components/SignUp/SignUpWelcome';
import { COLORS } from '../constants/Colors';

const viewWidth = Dimensions.get('window').width;

function SignUpScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <SignUpWelcome />
        <SignUpFormContainer />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue_default,
  },
  scrollContainer: {
    flex: 1,
    width: viewWidth,
  },
});

export default SignUpScreen;
