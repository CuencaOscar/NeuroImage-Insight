import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { imageUploadScreenTexts } from '../resources/textResources';
import ButtonList from '../components/ButtonList';
import { useNavigation } from '@react-navigation/native';
import { homeScreenStyles } from '../styles/screenStyles';

const ImageUploadScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const buttonImageUploadScreen = [
    {
      title: imageUploadScreenTexts.takePhotoButton,
      onPress: () => {
        navigation.navigate('Camera')
      },
    },
    {
      title: imageUploadScreenTexts.homeButton,
      onPress: () => {
        navigation.navigate('Home')
      },
    },
    {
      title: imageUploadScreenTexts.historicalButton,
      onPress: () => {
        navigation.navigate('Historical')
      },
    },
  ];

  return (
    <LinearGradient
      colors={['#5E7CE2', '#A0D2DB', '#87CEEB']}
      style={styles.container}
    >
      <View style={{ top: insets.top }}>
        <Text style={styles.titleText}>{imageUploadScreenTexts.title}</Text>
        <View style={styles.svgContainer}>
          <View style={styles.shadowContainer}>
          <Image
                source={require('../../assets/images/portada2.png')}
                style={homeScreenStyles.backgroundImage}
            />
          </View>
          <View style={{ flex: 0.5, marginBottom: 10, justifyContent: 'flex-end' }}>
            <ButtonList buttons={buttonImageUploadScreen} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  titleText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
  svgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowContainer: {
    backgroundColor: 'transparent',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});

export default ImageUploadScreen;