import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Maps from "../../components/Maps";
import { useState } from "react";
export default function Resumo() {

    const dados = useRoute().params;
    const itens = dados.itens;
    console.log(dados.homens);

    const [bebida, setBebida] = useState();
    const [cortes, setCortes] = useState();
    const [suprimento, setSuprimento] = useState();

    // function teste() {

    //     console.log(corte)
    //     let bebida = dados.itens.bebida
    // };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Resumo</Text>
                </View>

                <View>
                    <Text style={styles.subtitulo}>Participantes</Text>
                    {
                        <View style={{ gap: 12, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.descricao}>Pessoas</Text>
                            <Text style={styles.valor}>{dados.totalDePessoas}</Text>
                        </View>
                    }
                </View>

                <View>
                    <Text style={styles.subtitulo}>Cortes</Text>
                    {
                        itens.cortes.map((item) => {
                            return (
                                <View style={styles.linha}>
                                    <Text style={styles.descricao}>{item[0]}</Text>
                                    <View style={{ gap: 12, flexDirection: 'row' }}>
                                        <Text style={styles.vk}>{item[1]}</Text>
                                        <Text style={styles.valor}>{item[2]}</Text>
                                    </View>
                                </View>


                            )
                        })
                    }
                </View>
                <View>
                    <Text style={styles.subtitulo}>Acompanhamentos</Text>
                    {
                        itens.acompanhamentos.map((item) => {
                            return (
                                <View style={styles.linha}>
                                    <Text style={styles.descricao}>{item[0]}</Text>
                                    <View style={{ gap: 12, flexDirection: 'row' }}>
                                        <Text style={styles.vk}>{item[1]}</Text>
                                        <Text style={styles.valor}>{item[2]}</Text>
                                    </View>
                                </View>


                            )
                        })
                    }
                </View>
                <View>
                    <Text style={styles.subtitulo}>Suprimentos</Text>
                    {
                        itens.suprimentos.map((item) => {
                            return (
                                <View style={styles.linha}>
                                    <Text style={styles.descricao}>{item[0]}</Text>
                                    <View style={{ gap: 12, flexDirection: 'row' }}>
                                        <Text style={styles.vk}>{item[1]}</Text>
                                        <Text style={styles.valor}>{item[2]}</Text>
                                    </View>
                                </View>


                            )
                        })
                    }
                </View>
                <View>
                    <Text style={styles.subtitulo}>Bebidas</Text>
                    {
                        itens.bebidas.map((item) => {
                            return (
                                <View style={styles.linha}>
                                    <Text style={styles.descricao}>{item[0]}</Text>
                                    <View style={{ gap: 12, flexDirection: 'row' }}>
                                        <Text style={styles.vk}>{item[1]}</Text>
                                        <Text style={styles.valor}>{item[2]}</Text>
                                    </View>
                                </View>


                            )
                        })
                    }
                </View>
                <View style={styles.local}>
                    <TouchableOpacity onPress={() => teste()} style={{ marginBottom: 10, }}><Text>Pressione</Text></TouchableOpacity>
                    <Maps />
                </View>
            </ScrollView>
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
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 20,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    local: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    }
})