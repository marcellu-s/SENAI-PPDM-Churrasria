import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


export const Mapa = () => {
    return (

        <View style={style.container}>
            <Text style={{ fontSize: 60, }}>Hello</Text>
            <MapView style={style.mapaDimensao} />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    mapaDimensao: {
        width: '90%',
        height: "50%",
    }
})