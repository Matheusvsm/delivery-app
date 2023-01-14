import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { CartContextProvider } from './src/contexts/CartContext';

import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SplashScreen from './src/screens/SplashScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthContextProvider>
          <CartContextProvider>
            <RootStack.Navigator>
              <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Splash" component={SplashScreen} />
                <RootStack.Screen name="Login" component={LoginScreen} />
                <RootStack.Screen name="SignUp" component={SignUpScreen} />
              </RootStack.Group>
              <RootStack.Group screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Main" component={MainScreen} />
              </RootStack.Group>
            </RootStack.Navigator>
          </CartContextProvider>
        </AuthContextProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
