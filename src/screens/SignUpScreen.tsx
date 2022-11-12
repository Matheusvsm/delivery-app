import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import SignUpFormContainer from '../components/SignUp/SignUpFormContainer';
import SignUpWelcome from '../components/SignUp/SignUpWelcome';
import { COLORS } from '../constants/Colors';

const viewWidth = Dimensions.get('window').width;

function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <SignUpWelcome />
        <SignUpFormContainer />
      </ScrollView>
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
  scrollContainer: {
    flex: 1,
    width: viewWidth,
  },
});

export default SignUpScreen;
