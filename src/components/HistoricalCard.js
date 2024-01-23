import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HistoricalCard = ({ historical }) => {
    return (
        <View style={styles.card}>
            <LinearGradient
                colors={['#dde1e7', '#ffffff']}
                style={styles.gradient}
            >
                <Image source={{ uri: historical.image_path }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{"Type One: "}</Text>
                    <Text style={styles.name}>{historical.type_one}</Text>
                    <Text style={styles.name}>{"Type Two: "}</Text>
                    <Text style={styles.name}>{historical.type_two}</Text>
                    <Text style={styles.name}>{"Type Three: "}</Text>
                    <Text style={styles.name}>{historical.type_three}</Text>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
});

export default HistoricalCard;