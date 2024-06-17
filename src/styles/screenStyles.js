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

export const historicalScreenStyles = StyleSheet.create({
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

export const historicalCardComponentStyles = StyleSheet.create({
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

export const historicalCardSkeletonComponentStyles = StyleSheet.create({
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

export const historicalListScreenStyles = StyleSheet.create({
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
