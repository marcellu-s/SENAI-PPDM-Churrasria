import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import pino from '../../assets/icon.png';
import { CHAVE } from '@env'
const Maps = () => {
    
        (async function (){
            let cep = '04755010'; 
            fetch('https://maps.googleapis.com/maps/api/geocode/json?address='.concat(cep).concat('&region=BR&key=').concat(CHAVE)).then((response) => response.json()).
            then((json) => {
                                let geometry = json.results.map((i) => i.geometry.location);
                                let lat = geometry[0].lat;
                                let lgt = geometry[0].lng;
                                setLatitude(lat);
                                setLongitude(lgt)
    
    
                            })
                .catch(error => {
                    console.error(error);
                });
        })();

    const [latitude, setLatitude] = useState(-23.648057335940447)
    const [longitude, setLongitude] = useState(-46.721278295962286)

    return (
        <View style={styles.container}>
            <MapView initialRegion={{ latitude: latitude, longitude: longitude, latitudeDelta: 0.100, longitudeDelta: 0.100, }} style={styles.mapaDimensao}>
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
        width: '100%',
        height: '100%',
    },
    mapMarkerImage: {
        width: 30,
        height: 30,
    },
})

export default Maps;