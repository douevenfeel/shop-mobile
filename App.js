import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import DeviceScreen from './screens/DeviceScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar style='auto' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Shop' component={ShopScreen} />
                    <Stack.Screen name='Device' component={DeviceScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
