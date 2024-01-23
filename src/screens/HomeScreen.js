import React from 'react';
import { Text, Image, LogBox, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../components/Footer';
import { homeScreenStyles } from '../styles/screenStyles';
import { useNavigation } from '@react-navigation/native';
import { homeScreenTexts } from '../resources/textResources';
import ButtonList from '../components/ButtonList';


const HomeScreen = () => {
    LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered']);
    const navigation = useNavigation();
    const buttonData = [
        {
            title: homeScreenTexts.captureUploadButton,
            onPress: () => {
                navigation.navigate('ImageUpload');
            },
        },
        {
            title: homeScreenTexts.alzheimerListButton,
            onPress: () => {
                navigation.navigate('AlzheimerList');
            },
        },
        {
            title: homeScreenTexts.userManualButton,
            onPress: () => {
                navigation.navigate('UserManual');
            },
        },
    ];
    return (
        <LinearGradient
            colors={['#2e7d32', '#388e3c', '#43a047']}
            style={homeScreenStyles.container}
        >
            <Text style={homeScreenStyles.title}>{homeScreenTexts.title}</Text>
            <Image
                source={require('../../assets/images/portada.png')}
                style={homeScreenStyles.backgroundImage}
            />
            <View style={{flex:1, justifyContent: 'flex-end'}}>
                <ButtonList buttons={buttonData} />
            </View>
            <Footer />
        </LinearGradient>
    );
};

export default HomeScreen;