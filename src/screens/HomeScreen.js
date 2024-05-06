import React from 'react';
import { Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../components/Footer';
import ButtonList from '../components/ButtonList';
import { homeScreenStyles } from '../styles/screenStyles';
import { useNavigation } from '@react-navigation/native';
import { homeScreenTexts } from '../resources/textResources';

/**
 * HomeScreen - Displays the main screen of the app with navigation buttons and a background image.
 * Utilizes LinearGradient for aesthetic background.
 */
const HomeScreen = () => {
    const navigation = useNavigation();

    // Button configuration for navigating to different screens
    const buttonData = [
        {
            title: homeScreenTexts.captureUploadButton,
            onPress: () => navigation.navigate('ImageUpload'),
        },
        {
            title: homeScreenTexts.alzheimerListButton,
            onPress: () => navigation.navigate('AlzheimerList'),
        },
        {
            title: homeScreenTexts.userManualButton,
            onPress: () => navigation.navigate('UserManual'),
        },
    ];

    return (
        <LinearGradient
            colors={['#5E7CE2', '#A0D2DB', '#87CEEB']}
            style={homeScreenStyles.container}
        >
            <Text style={homeScreenStyles.title}>{homeScreenTexts.title}</Text>
            <Image
                source={require('../../assets/images/portada.png')}
                style={homeScreenStyles.backgroundImage}
            />
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ButtonList buttons={buttonData} />
            </View>
            <Footer />
        </LinearGradient>
    );
};

export default HomeScreen;
