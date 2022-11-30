import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Info from './Info';

export default function Category({ category }) {
    return (
        <View style={styles.container}>
            {category?.infos?.length !== 0 && <Text style={styles.text}>{category.title}:</Text>}
            <View>{category.infos && category.infos.map((info) => <Info key={info.id} info={info} />)}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { display: 'flex', width: '100%', flexDirection: 'column' },
    text: { color: '#f0f0f0', fontSize: 16, textAlign: 'center', padding: 4, fontWeight: 'bold' },
});
