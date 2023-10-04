import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import pino from '../../assets/icon.png';
import swift from '../../assets/logo_swift.png'
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
                <Marker coordinate={{ latitude: -23.64589112035344, longitude: -46.70176783784438,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.6401893408817, longitude: -46.73472771640477,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.631293304940876, longitude: -46.73509186514136,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.650085470448573, longitude: -46.75681940642432,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.612387222017784, longitude: -46.74237483987307,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.623128344920655, longitude:  -46.71774635856861,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.63547201589275, longitude: -46.71386768125056,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.651266934865017, longitude: -46.694490805097,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.66094487844546, longitude: -46.68862869351844,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.65471870446351, longitude: -46.67357721240622,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.640074590957575, longitude: -46.66562181952293,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.6207667131451, longitude: -46.66749836201962,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.619576408359617, longitude: -46.670818398744544,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.609524514555808, longitude: -46.6840985456442,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.623279543289865, longitude: -46.688284678906044,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: -23.687519909128504, longitude: -46.70298872567226,}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={swift} style={styles.mapMarkerImage} />
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