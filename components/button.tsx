import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';

interface ButtonProps {
    onPress?: () => void;
    text: string;
    type?: 'default' | 'refuse';
}


export default function Button({ onPress, text, type = 'default' }: ButtonProps) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={[styles.button, { backgroundColor: type === 'refuse' ? '#ef233c' : '#3461FD' }]}>
                <Text style={{ color: 'white', fontSize: 16, fontFamily:"Poppins" }}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex:1,
        margin:10
    },
    button: {
        width: 345,
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
})