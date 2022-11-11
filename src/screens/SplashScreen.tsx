import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { RootStackProps } from '../../App';
import { SplashImg } from '../assets/Icons';
import { COLORS } from '../constants/Colors';

function SplashScreen() {
  const navigation = useNavigation<RootStackProps>();

  useEffect(() => {
    const splashLoading = setTimeout(() => {
      navigation.navigate("Login")
    }, 2000);

    return () => clearTimeout(splashLoading);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.splashImgContainer}>
        <Image source={SplashImg} />
        <Text style={styles.splashText}>Mercadinho Delivery</Text>
      </View>
      <ActivityIndicator size="large" color="white" style={{ margin: 100 }} />
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
