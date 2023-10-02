import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Maps from "../../components/Maps";
export default function Resumo() {

    const dados = useRoute().params;
    const itens = dados.itens;
    console.log(dados.consumoCortes);
    console.log(Object.keys(dados));

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Resumo</Text>
                </View>

                <View>
                    <Text style={styles.subtitulo}>Participantes</Text>
                    {
                        <View style={{ gap: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.descricao}>Pessoas</Text>
                            <Text style={styles.valor}>{dados.totalDePessoa}</Text>
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

                <View>
                    <Text style={styles.subtitulo}>Consumo</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.descricao}>Consumo de Cortes</Text>
                        <Text style={styles.vk}>{dados.consumoCortes}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.descricao}>Consumo de Bebidas</Text>
                        <Text style={styles.vk}>{dados.consumoBebidas}</Text>
                    </View>

                    <Text style={styles.subtitulo}>VALOR TOTAL</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.subtitulofinal}>PREÇO FINAL</Text>
                        <Text style={styles.subtitulofinal}>{dados.precoFinal}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.descricao}>Valor p/ Pessoa C/ Criança</Text>
                        <Text style={styles.vk}>R${dados.valorPorPessoaComCrianca}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.descricao}>Valor p/ Pessoa S/ Criança</Text>
                        <Text style={styles.vk}>R${dados.valorPorPessoaSemCrianca}</Text>
                    </View>
                </View>
                <View style={styles.local}>
                    <Maps>

                    </Maps>
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
    subtitulofinal: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})