import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Screen from '../components/Screen';
import { RootStackParamList } from '../../App';
import { SplashImg } from '../assets/Icons';
import { COLORS } from '../constants/Colors';

function SplashScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const splashLoading = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    return () => clearTimeout(splashLoading);
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={styles.splashImgContainer}>
        <Image source={SplashImg} />
        <Text style={styles.splashText}>Mercadinho Delivery</Text>
      </View>
      <ActivityIndicator size="large" color="white" style={{ margin: 100 }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue_default,
  },
  splashImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    color: 'white',
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
