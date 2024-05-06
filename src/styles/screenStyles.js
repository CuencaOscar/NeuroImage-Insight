import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

// Estilos comunes para la aplicación
const baseStyles = {
    shadowStyle: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    centerText: {
        textAlign: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    }
};

// Estilos específicos para HomeScreen
export const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backgroundImage: {
        width,
        resizeMode: 'contain',
        ...baseStyles.shadowStyle,
    },
    title: {
        fontSize: 45,
        paddingHorizontal: 18,
        color: 'white',
        top: 50,
        ...baseStyles.centerText,
        ...baseStyles.boldText,
    },
    developerText: {
        fontSize: 16,
        color: 'white',
        bottom: 30,
        ...baseStyles.centerText,
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
        fontSize: Platform.OS === 'android' ? 14 : 15,
        ...baseStyles.centerText,
    },
});

// Estilos específicos para AlzheimerListScreen
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
        ...baseStyles.boldText,
    },
});

export const imageUploadScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    topContainer: (topInset) => ({
      top: topInset,
    }),
    titleText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonList: {
      flex: 0.5,
      justifyContent: 'flex-end',
    },
    shadowContainer: {
      backgroundColor: 'transparent',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 40 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
  });

  export const cameraScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    container_first: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000",
    },
    container_message_style: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    message_style: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
    camera: {
        flex: 1,
        alignItems: 'center',
        resizeMode: "contain",
    },
    buttonContainer: {
        position: "absolute",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
    },
    loading_indicator: {
        position: 'absolute',
        top: '50%',
        left: '25%',
    },
});
