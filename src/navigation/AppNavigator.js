import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ImageUploadScreen from '../screens/ImageUploadScreen';
import HistoricalScreen from '../screens/HistoricalScreen';
import AlzheimerListScreen from '../screens/AlzheimerListScreen';
import AlzheimerDetailScreen from '../screens/AlzheimerDetailScreen';
import UserManualScreen from '../screens/UserManualScreen';
import CameraScreen from '../screens/CameraScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ImageUpload" component={ImageUploadScreen} />
                {/* <Stack.Screen name="Historical" component={HistoricalScreen} />
                <Stack.Screen name="AlzheimerList" component={AlzheimerListScreen} />
                <Stack.Screen name="AlzheimerDetail" component={AlzheimerDetailScreen} />
                <Stack.Screen name="UserManual" component={UserManualScreen} />
                <Stack.Screen name="Camera" component={CameraScreen} /> */}
            </Stack.Navigator>
    )
};

export default AppNavigator;