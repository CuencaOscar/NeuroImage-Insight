import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { historicalCardComponentStyles } from '../styles/screenStyles';

const HistoricalCard = ({ historical }) => {
    return (
        <View style={historicalCardComponentStyles.card}>
            <LinearGradient
                colors={['#dde1e7', '#ffffff']}
                style={styles.gradient}
            >
                <Image source={{ uri: historical.image_path }} style={styles.image} />
                <View style={historicalCardComponentStyles.infoContainer}>
                    <Text style={historicalCardComponentStyles.name}>{"Type One: "}</Text>
                    <Text style={historicalCardComponentStyles.name}>{historical.type_one}</Text>
                    <Text style={historicalCardComponentStyles.name}>{"Type Two: "}</Text>
                    <Text style={historicalCardComponentStyles.name}>{historical.type_two}</Text>
                    <Text style={historicalCardComponentStyles.name}>{"Type Three: "}</Text>
                    <Text style={historicalCardComponentStyles.name}>{historical.type_three}</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

export default HistoricalCard;