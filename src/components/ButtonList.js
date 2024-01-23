import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity, View } from 'react-native'
import { homeScreenStyles } from '../styles/screenStyles'

const ButtonList = ({ buttons }) => {
    return (
        <View style={{ marginBottom: 10 }}>
            {buttons.map((button, index) => (
                <TouchableOpacity key={index} style={homeScreenStyles.button} onPress={button.onPress} activeOpacity={0.6}>
                    <Text style={homeScreenStyles.buttonText}>{button.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default ButtonList