import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { historicalCardComponentStyles } from '../styles/screenStyles';

const HistoricalCard = ({ historical }) => {
    return (
        <View style={historicalCardComponentStyles.card}>
            <LinearGradient
                colors={['#dde1e7', '#ffffff']}
                style={historicalCardComponentStyles.gradient}
            >
                <Image source={{ uri: historical.image_url }} style={historicalCardComponentStyles.image} />
                <View style={historicalCardComponentStyles.infoContainer}>
                    <Text style={historicalCardComponentStyles.label}>{"Diagnosis: "}</Text>
                    <Text style={historicalCardComponentStyles.value}>
                        {historical.type_one.split(':')[0].trim()}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
};

export default HistoricalCard;