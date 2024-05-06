import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const UserGuideList = ({ title, imageUrl, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={imageUrl} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: Platform.OS === 'android' ? '55%' : '50%',
    height: Platform.OS === 'android' ? height / 1.8 : height / 2.1,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 20,
  },
  description: {
    fontSize: Platform.OS === 'android' ? 15 : 17,
    color: 'white',
    textAlign: 'center'
  }
});

export default UserGuideList;