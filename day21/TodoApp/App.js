import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.root}>
        <Text>Hello World.</Text>
      </View>
      <View style={styles.root}>
        <Text>Hello World.</Text>
      </View>
      <View style={styles.root}>
        <Text>Hello World.</Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'red',
    flex: 1,
  },
});
