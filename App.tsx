import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { Focus } from './src/features/Focus';
import { colors } from './src/utils/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello there</Text>
      <Focus />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});
