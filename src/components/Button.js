import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Button = ({ title, onPress, icon, color, disabled = false, size=24 }) => {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[styles.button, disabled ? styles.disabledButton : null]}
            disabled={disabled}>
            <Entypo name={icon} size={size} color={color ? color : 'green'} />
            {title !== '' && <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
};

export { Button };

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'green',
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    text: {
        fontWeight: '500',
        fontSize: 16,
        color: 'green',
        marginLeft: 8,
    },
    disabledButton: {
        opacity: 0.5,
    },
});