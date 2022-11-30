import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Info({ info }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{info.title}:</Text>
            </View>
            <View>
                <Text style={styles.text}>{info.content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { display: 'flex', width: '100%', flexDirection: 'row' },
    textContainer: { width: '42%' },
    text: { color: '#f0f0f0', fontSize: 16, alignSelf: 'flex-start' },
});
