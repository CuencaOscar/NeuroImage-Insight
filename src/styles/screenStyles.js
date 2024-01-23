import { StyleSheet, Dimensions, Platform } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        resizeMode: 'cover',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    title: {
        fontSize: 45,
        paddingHorizontal: 18,
        fontWeight: 'bold',
        color: 'white',
        top: 50,
        textAlign: 'center',
    },
    developerText: {
        fontSize: 16,
        color: 'white',
        bottom: 30,
    },
    button: {
        backgroundColor: '#5E7CE2',
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: Platform.OS === 'android' ? 14 : 20,
        textAlign: 'center',
    },
});

export const alzheimerListScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appbar: {
        backgroundColor: 'transparent',
        elevation: 0,
    },
    title_header: {
        textAlign: 'center',
        color: 'white',
        fontSize: Platform.OS === 'android' ? 20 : 24,
        fontWeight: 'bold'
    },
});