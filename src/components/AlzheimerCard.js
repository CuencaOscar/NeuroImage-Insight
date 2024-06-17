import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const AlzheimerCard = ({ alzheimer }) => {
    const navigation = useNavigation();
    console.log('La data que llega es: ', alzheimer)
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AlzheimerDetail', alzheimer)}>
            <LinearGradient
                colors={['#dde1e7', '#ffffff']}
                style={styles.gradient}
            >
                <Image source={{ uri: alzheimer.image_url }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{alzheimer.name}</Text>
                    <Text style={styles.description} numberOfLines={2}>{alzheimer.definition_of_state}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
});

export default AlzheimerCard;