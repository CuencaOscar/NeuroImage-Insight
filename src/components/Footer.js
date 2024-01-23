import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {

    const openURL = (url) => {
        Linking.openURL(url).catch(err => console.error("No se pudo abrir la URL", err));
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => {openURL("https://www.instagram.com/xxoscarcuencaxx/")}}>
                    <FontAwesome name="instagram" size={30} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {openURL("https://github.com/CuencaOscar")}}>
                    <FontAwesome name="github" size={30} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {openURL("https://www.linkedin.com/in/ocuenca-moreno/")}}>
                    <FontAwesome name="linkedin" size={30} color="#FFF" />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Developed by Oscar Cuenca</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        marginBottom: 10,
    },
    text: {
        color: '#FFF',
        fontSize: 14,
    },
});

export default Footer;