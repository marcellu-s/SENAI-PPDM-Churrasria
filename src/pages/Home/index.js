import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

import HomeBttn from '../../components/HomeBttn';

import logo from '../../assets/fuego-churrasria.png';

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 16, paddingTop: 20 }}>
                    <Image source={logo} style={{width: 48, height: 48}} />
                    {/* <Image
                        style={{height: 48, width: 48}}
                        source={{uri: 'https://raw.githubusercontent.com/marcellu-s/SENAI-PPDM-churrasria/main/src/assets/FUEGO%20CHURRASRIA.png'}}
                    /> */}
                    <Text style={styles.title}>FUEGO CHURRASRIA</Text>
                </View>
                <View style={styles.headline}>
                    <Text style={styles.headlineText}>VAMOS TE AJUDAR A MANDAR BRASA NO SEU CHURRASCO!</Text>
                    <View style={{ width: 75, height: 10, backgroundColor: '#EF233C'}}>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.bttns}>
                    <View style={styles.bttn}>
                        <HomeBttn tittle="Calcular Churrasco" link="Calcular" description="Saiba o gasto com suprimentos ao se preparar um churrasco"></HomeBttn>
                    </View>
                    <View style={styles.bttn}>
                        <HomeBttn tittle="Mapa" link="Resumo" description="Veja a localização do nosso churrasco no mapa"></HomeBttn>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    headline: {
        marginTop: 32,
    },

    headlineText: {
        fontSize: 28,
        fontWeight: 'bold',
        width: '100%',
    },

    bttn: {
        marginTop: 5,
        paddingHorizontal: 13,
    },

    bttns: {
        paddingTop: 95,
    },
});
