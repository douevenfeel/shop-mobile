import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetDevice, setDevice } from '../store/deviceSlice';
import { axiosInstance } from '../api';
import Category from '../components/Category';

export default function DeviceScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const { device } = useSelector((store) => store.device);
    useEffect(() => {
        async function getOneDevice() {
            await axiosInstance.get(`/device/${id}`).then((response) => dispatch(setDevice(response?.data)));
        }
        getOneDevice();
        return () => {
            dispatch(resetDevice());
        };
    }, [dispatch]);
    return (
        <ScrollView>
            <View style={styles.page}>
                {device && (
                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            source={{ uri: `http://192.168.0.167:5000/${device.image}` }}
                            resizeMode='contain'
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.brandTitle}>{device?.brand?.title}</Text>
                            <View style={styles.row}>
                                <Text style={styles.text}>{device.title}</Text>
                                <Text style={styles.text}>{device.price} р.</Text>
                            </View>
                        </View>
                        {device.categories?.length !== 0 && (
                            <View style={styles.info}>
                                <Text style={styles.text}>Подробная информация</Text>
                                {device.categories &&
                                    device?.categories.map((category) => (
                                        <Category key={category.id} category={category} />
                                    ))}
                            </View>
                        )}
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
    },
    container: { display: 'flex', width: '100%', padding: 20, gap: 16 },
    image: { height: 440, alignSelf: 'stretch', width: '100%' },
    textContainer: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#4287f5', fontSize: 16 },
    text: { color: '#f0f0f0', fontSize: 16 },
});
