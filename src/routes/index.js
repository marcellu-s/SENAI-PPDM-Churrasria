import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Calcular from '../pages/Calcular';
const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Calcular" component={Calcular} />
            </Stack.Navigator>
        </NavigationContainer> 
    );
};

export default Routes;