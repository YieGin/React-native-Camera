import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useCamera} from 'react-native-camera-hooks';
import {RNCamera} from 'react-native-camera';
import RNFS from 'react-native-fs';
const Camera = () => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const captureImage = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalCachesDirectoryPath + '/MyTest.jpg';
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <RNCamera
        style={styles.preview}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}></RNCamera>
      <Pressable onPress={() => captureImage()} style={styles.button}>
        <Text style={styles.text}>Phone Camera</Text>
      </Pressable>
    </View>
  );
};

export default Camera;

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
