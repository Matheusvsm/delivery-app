import { StatusBar } from 'native-base';
import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';

type ScreenProps = ViewProps;

function Screen({ children, style }: ScreenProps) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
