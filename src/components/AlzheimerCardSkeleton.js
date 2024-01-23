import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AlzheimerCardSkeleton = () => {
    return (
        <View style={styles.card}>
            <LinearGradient
                colors={['#dde1e7', '#ffffff']}
                style={styles.gradient}
            >
                <View style={styles.imageSkeleton} />
                <View style={styles.infoContainer}>
                    <View style={styles.nameSkeleton} />
                    <View style={styles.descriptionSkeleton} />
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
    imageSkeleton: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#e1e1e1',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    nameSkeleton: {
        width: '70%',
        height: 18,
        backgroundColor: '#e1e1e1',
        borderRadius: 4,
    },
    descriptionSkeleton: {
        width: '90%',
        height: 14,
        backgroundColor: '#e1e1e1',
        borderRadius: 4,
        marginTop: 10,
    },
});

export default AlzheimerCardSkeleton;