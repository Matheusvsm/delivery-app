import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SplashScreen from './src/screens/SplashScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="SignUp" component={SignUpScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
