import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Maps from "../../components/Maps";
import { useRoute, useNavigation } from "@react-navigation/native";
export default function Resumo() {

    const navigation = useNavigation();

    const dados = useRoute().params;
    const itens = dados.itens;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <View>
                    <Text style={styles.title}>Resumo</Text>
                </View>

                <View>
                    <Text style={styles.subtitulo}>Participantes</Text>
                    <View style={{ gap: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.descricao}>Pessoas</Text>
                        <Text style={styles.valor}>{dados.totalDePessoa}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.subtitulo}>Cortes</Text>
                    {
                        itens.cortes.map((item) => {
                            return (
                                <View key={Math.random()} style={styles.linha}>
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
                                <View key={Math.random()} style={styles.linha}>
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
                                <View key={Math.random()} style={styles.linha}>
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
                                <View key={Math.random()} style={styles.linha}>
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.subtitulofinal}>VALOR TOTAL</Text>
                        <Text style={styles.subtitulofinal}>R${dados.precoFinal}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.descricao}>Valor p/ Pessoa C/ Criança</Text>
                        <Text style={styles.vk}>R${dados.valorPorPessoaComCrianca}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.descricao}>Valor p/ Pessoa S/ Criança</Text>
                        <Text style={styles.vk}>R${dados.valorPorPessoaSemCrianca}</Text>
                    </View>

                    <Text style={styles.subtitulo}>Local</Text>

                    <View style={{ flexDirection: 'row', gap: 4, }}>
                        <Text style={styles.descricao}>CEP: {'05876040'}</Text>
                        <Text style={styles.descricao}>RUA: {'Rua Antônio'} nº:{99}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 4, }}>
                        <Text style={styles.descricao}>Bairro: {'Sem Bairro'}</Text>
                        <Text style={styles.descricao}>Cidade: {'São Paulo'} Estado:{'SP'}</Text>
                    </View>
                </View>
                <View style={styles.local}>
                    <Maps/>
                </View>
                
                <View style={{ marginTop: 12 }}>
                    <TouchableOpacity style={{width: '100%', backgroundColor: '#fff', borderWidth: 1, borderColor: '#EF233C',padding: 5, borderRadius: 8}} onPress={() => navigation.navigate('Home')}>
                        <Text style={{fontSize: 32, color: '#EF233C', textAlign: 'center'}}>VOLTAR - ÍNICIO</Text>
                    </TouchableOpacity>
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
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    local: {
        width: '100%',
        height: 200,
        marginTop: 20,
    }
})