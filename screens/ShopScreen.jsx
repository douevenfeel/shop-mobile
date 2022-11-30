import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import { setDevices } from '../store/deviceSlice';
import DeviceCard from '../components/DeviceCard';

export default function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const { devices } = useSelector((store) => store.device);

    useEffect(() => {
        async function getAllDevices() {
            await axiosInstance.get('/device').then((response) => dispatch(setDevices(response?.data)));
        }
        getAllDevices();
    }, [dispatch]);

    return (
        <ScrollView>
            <View>
                <View style={styles.page}>
                    {!!devices &&
                        devices.map((device) => <DeviceCard key={device.id} {...device} navigation={navigation} />)}
                </View>
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
});
