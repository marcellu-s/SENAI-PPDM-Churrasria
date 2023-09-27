import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Maps = () => {

    const getInitialState = {
        latitude: -23.648315442108636,
        longitude: -46.72224354933882,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView initialRegion={getInitialState} style={styles.mapaDimensao} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    mapaDimensao: {
        width: '90%',
        height: '50%',
    }
})

export default Maps;