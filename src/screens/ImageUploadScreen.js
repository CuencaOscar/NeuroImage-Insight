import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ButtonList from '../components/ButtonList';
import { imageUploadScreenTexts } from '../resources/textResources';
import { homeScreenStyles, imageUploadScreenStyles } from '../styles/screenStyles';

/**
 * ImageUploadScreen displays a screen for image upload functionality.
 * It includes navigation to different parts of the app like camera, home and historical data.
 * The screen is styled with a gradient background and contains a list of buttons for navigation.
 */
const ImageUploadScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const buttonImageUploadScreen = [
    {
      title: imageUploadScreenTexts.takePhotoButton,
      onPress: () => navigation.navigate('Camera')
    },
    {
      title: imageUploadScreenTexts.homeButton,
      onPress: () => navigation.navigate('Home')
    },
    {
      title: imageUploadScreenTexts.historicalButton,
      onPress: () => navigation.navigate('Historical')
    },
  ];

  return (
    <LinearGradient
      colors={['#5E7CE2', '#A0D2DB', '#87CEEB']}
      style={imageUploadScreenStyles.container}
    >
      <View style={imageUploadScreenStyles.topContainer(insets.top)}>
        <Text style={imageUploadScreenStyles.titleText}>{imageUploadScreenTexts.title}</Text>
        <View style={imageUploadScreenStyles.imageContainer}>
          <Image
            source={require('../../assets/images/portada2.png')}
            style={homeScreenStyles.backgroundImage}
          />
          <ButtonList buttons={buttonImageUploadScreen} style={imageUploadScreenStyles.buttonList} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default ImageUploadScreen;
