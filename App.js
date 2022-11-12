import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Button } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Button 
      title='Click me'
      onPress={()=> alert(' HI DUMMIE!')}
      color="purple"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
