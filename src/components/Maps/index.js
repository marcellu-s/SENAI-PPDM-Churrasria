import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import pino from '../../assets/icon.png';

const Maps = () => {

    async function posicao() {
        // falta a chave
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=05876040&region=BR&key=').then((response) => response.json()).
        then((json) => {
                            let geometry = json.results.map((i) => i.geometry.location);
                            let lat = geometry[0].lat;
                            let lgt = geometry[0].lng;
                            setLatitude(lat);
                            setLongitude()
                            console.log(lat, lgt);


                        })
            // .then(json => {
            //     console.log(json.movies);
            // })
            .catch(error => {
                console.error(error);
            });
    };

    const [latitude, setLatitude] = useState(-23.648057335940447)
    const [longitude, setLongitude] = useState(-46.721278295962286)
    const [endereco, setEndereco] = useState('Sao+Paulo')

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ backgroundColor: '#fff', marginBottom: 50, }} onPress={() => posicao()}>
                <Text>Press Here</Text>
            </TouchableOpacity>
            <MapView initialRegion={{ latitude: latitude, longitude: longitude, latitudeDelta: 1, longitudeDelta: 1, }} style={styles.mapaDimensao}>
                <Marker coordinate={{ latitude: latitude, longitude: longitude }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={pino} style={styles.mapMarkerImage} />
                    </View>
                </Marker>

            </MapView>
        </View >
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
        height: '30%',
        marginBottom: 10,
    },
    mapMarkerImage: {
        width: 30,
        height: 30,
    },
})

export default Maps;