import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { historicalCardSkeletonComponentStyles } from '../styles/screenStyles';

const HistoricalCardSkeleton = () => {
    return (
        <View style={historicalCardSkeletonComponentStyles.card}>
            <LinearGradient
                colors={['#dde1e7', '#ffffff']}
                style={historicalCardSkeletonComponentStyles.gradient}
            >
                <View style={historicalCardSkeletonComponentStyles.imageSkeleton} />
                <View style={historicalCardSkeletonComponentStyles.infoContainer}>
                    <View style={historicalCardSkeletonComponentStyles.nameSkeleton} />
                    <View style={historicalCardSkeletonComponentStyles.descriptionSkeleton} />
                </View>
            </LinearGradient>
        </View>
    );
};

export default HistoricalCardSkeleton;