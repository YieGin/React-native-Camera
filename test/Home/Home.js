import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Camera');
  };
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={onPressHandler} style={styles.button}>
        <Text style={styles.text}>Phone Camera</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f51254',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
});
