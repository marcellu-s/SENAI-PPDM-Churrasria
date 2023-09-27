import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Calcular from '../pages/Calcular';
import Localizacao from '../pages/Localizacao';

const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Calcular" component={Calcular} />
                <Stack.Screen name="Localizacao" component={Localizacao} />
            </Stack.Navigator>
        </NavigationContainer> 
    );
};

export default Routes;