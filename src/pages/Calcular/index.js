import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@rneui/themed";
import { Participantes } from "../../components/Participantes";
import { listaAcompanhamento, listaCortes, listaSuprimento, listaBebidas, modalDataria, receitaria } from "../Services";
import calculo from "../Services/calculo";

export default function Calcular() {

    const [ homem, setHomem ] = useState(0);
    const [ mulher, setMulher ] = useState(0);
    const [ crianca, setCrianca ] = useState(0);

    const [ cortes, setCortes ] = useState(listaCortes);
    let cortesTemp = listaCortes;

    const [ acompanhamento, setAcompanhamento ] = useState(listaAcompanhamento);
    let acompanhamentoTemp = listaAcompanhamento;

    const [ suprimento, setSuprimento ] = useState(listaSuprimento);
    let suprimentoTemp = listaSuprimento;

    const [ bebida, setBebida ] = useState(listaBebidas);
    let bebidaTemp = listaBebidas;


    function toggleCheckbox(id, lista) {

        if (lista == 'cortes') {

            setCortes(cortesTemp.map((data) => {

                if (data.id == id) {
    
                    data.check = !data.check;
                }
    
                return data;
            }));
        } else if (lista == 'acompanhamento') {

            setAcompanhamento(acompanhamentoTemp.map((data) => {

                if (data.id == id) {
    
                    data.check = !data.check;
                }
    
                return data;
            }));
        } else if (lista == 'suprimento') {
            setSuprimento(suprimentoTemp.map((data) => {

                if (data.id == id) {
    
                    data.check = !data.check;
                }
    
                return data;
            }));
        } else if (lista == 'bebida') {
            setBebida(bebidaTemp.map((data) => {

                if (data.id == id) {
    
                    data.check = !data.check;
                }
    
                return data;
            }));
        }
        
    };
    
    function pegarTodosDados() {

        let todosDados = {
            "itens": {
                dadosCortes: cortes.filter((item) => item.check == true),
                dadosAcompanhamento: acompanhamento.filter((item) => item.check == true),
                dadosSuprimentos: suprimento.filter((item) => item.check == true),
                dadosBebidas: bebida.filter((item) => item.check == true),
            },
            "participantes": {
                totalHomem: homem,
                totalMulher: mulher,
                totalCriança: crianca,
            }
        };

        return todosDados;
    }

    const navigation = useNavigation();

    function toCalculo() {

        const dados = calculo(pegarTodosDados(), homem, mulher, crianca);

        // console.log(dados.itens.cortes);
        // navigation.navigate('Resumo', dados);
        console.log(dados);
    }

    const [modalVisibility, setVisibility] = useState(false);
    const [modalData, setModalData] = useState(receitaria['Linguiça']);

    function showModal(data) {

        setVisibility(true);

        setModalData(data);
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', paddingTop: 20 }}>Calcular Churrasco</Text>
                    <View style={{ width: 75, height: 10, backgroundColor: '#EF233C'}}>
                        <Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', rowGap: 40, marginTop: 40 }}>
                    <View>
                        <Text style={styles.subtitle}>1. Participantes</Text>
                        <Participantes text="Homem" state={homem} setState={setHomem} />
                        <Participantes text="Mulher" state={mulher} setState={setMulher} />
                        <Participantes text="Criança" state={crianca} setState={setCrianca} />
                    </View>
                    <View>
                        <Text style={styles.subtitle}>1. Quais cortes serão servidos?</Text>
                        {
                            cortes.map((item) => {
                                return(
                                    <View key={item.id} style={styles.option}>
                                        <CheckBox checked={item.check} onPress={() => toggleCheckbox(item.id, 'cortes')} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={item.nome} size={32} />
                                        <Text>R$ {item.preco}</Text>
                                        <TouchableOpacity style={styles.optionBtn} onPress={() => showModal(receitaria[item.nome])}>
                                            <Text style={{color: '#fff'}}>Receita &gt;</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View>
                        <Text style={styles.subtitle}>3. Acompanhamentos</Text>
                        {
                            acompanhamento.map((item) => {
                                return(
                                    <View key={item.id} style={styles.option}>
                                        <CheckBox  onPress={() => {toggleCheckbox(item.id, 'acompanhamento')}} checked={item.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={item.nome} size={32} />
                                        <Text>R$ {item.preco}</Text>
                                    </View>
    
                                )
                            })
                        }
                    </View>
                    <View>
                        <Text style={styles.subtitle}>4. Suprimentos</Text>
                        {
                            suprimento.map((item) => {
                                return(
                                    <View key={item.id} style={styles.option}>
                                        <CheckBox onPress={() => {toggleCheckbox(item.id, 'suprimento')}} checked={item.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={item.nome} size={32} />
                                        <Text>R$ {item.preco}</Text>
                                    </View>
    
                                )
                            })
                        }
                    </View>
                    <View>
                        <Text style={styles.subtitle}>5. Bebidas</Text>
                        {
                            bebida.map((item) => {
                                return(
                                    <View key={item.id} style={styles.option}>
                                        <CheckBox onPress={() => {toggleCheckbox(item.id, 'bebida')}} checked={item.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={item.nome} size={32} />
                                        <Text>R$ {item.preco}</Text>
                                    </View>
    
                                )
                            })
                        }
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{width: '100%', backgroundColor: '#EF233C', padding: 5, borderRadius: 8}} onPress={() => toCalculo()}>
                        <Text style={{fontSize: 32, color: '#fff', textAlign: 'center'}}>CALCULAR</Text>
                    </TouchableOpacity>
                </View>
                <Modal animationType="slide" transparent={true} visible={modalVisibility}>
                    <View style={stylesModal.modalContainer}>
                        <ScrollView>
                            <View style={stylesModal.upperPart}>
                                <Text style={{fontSize: 24, flex: 8}}>{modalData.titulo}</Text>
                                <TouchableOpacity style={{flex: 1}} onPress={() => setVisibility(false)}>
                                    <Text style={{fontSize: 25, color: 'red', fontWeight: '800'}}>x</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={stylesModal.midPart}>
                                <Image source={{uri: String(modalData.image)}} style={stylesModal.midImage} />
                                <View style={stylesModal.midInfos}>
                                    <View style={stylesModal.midInfo}>
                                        <Text style={stylesModal.midInfoTittle}>Dificuldade</Text>
                                        <Text style={stylesModal.info}>{modalData.dificuldade}</Text>
                                    </View>
                                    <View style={stylesModal.midInfo}>
                                        <Text style={stylesModal.midInfoTittle}>Tempo</Text>
                                        <Text style={stylesModal.info}>{modalData.tempo}</Text>
                                    </View>
                                    <View style={stylesModal.midInfo}>
                                        <Text style={stylesModal.midInfoTittle}>Rendimento</Text>
                                        <Text style={stylesModal.info}>{modalData.rendimento}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={stylesModal.bottomPart}>
                                <View style={stylesModal.ingredientes}>
                                    <Text style={{fontWeight: '600', fontSize: 12}}>INGREDIENTES</Text>
                                    <View>
                                        {
                                            modalData.ingrediente.map((item) => {
                                                return(
                                                    <Text key={Math.random()} style={styles.ingrediente}><Text>&bull;</Text>  {item}</Text>
                                                )
                                            })
                                        }
                                    </View>
                                </View>

                                <View style={stylesModal.preparo}>
                                    <Text style={{fontWeight: '600', fontSize: 12}}>MODO DE PREPARO</Text>
                                    <View>
                                        {
                                            modalData['modo de preparo'].map((item, index) => {
                                                return(
                                                    <Text key={Math.random()} style={styles.passo}><Text>{index + 1}.</Text>  {item}</Text>
                                                );
                                            })
                                        }
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },

    subtitle: {
        fontSize: 24,
    },

    text: {
        fontSize: 20,
        textAlign: 'center'
    },

    textInput: {
        fontSize: 20,
    },

    addItemLeft: {
        borderWidth: 1, 
        padding: 20,
        borderTopLeftRadius: 8,
        borderBottomStartRadius: 8,
    },

    addItemRight: {
        borderWidth: 1, 
        padding: 20,
        borderTopRightRadius: 8,
        borderBottomEndRadius: 8,
    },

    option: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    optionBtn: {
        borderRadius: 8,
        padding: 4,
        backgroundColor: '#EF233C'
    }
});

const stylesModal = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        padding: 20,
    },

    upperPart: {
        flexDirection: 'row', 
    },

    midImage: {     
        width: '90%',
        height: 200,
        borderRadius: 8,
        alignSelf: 'center',
        marginVertical: 20,
    },
    midInfos: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    midInfo: {
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    midInfoTittle: {
        color: '#EF233C',
        fontSize: 15,
        fontWeight: '500',
    },
    info: {
        fontWeight: '500',
        fontSize: 15,
    },
    bottomPart: {
        flex: 6,
    },
    ingredientes: {
        
    },
    ingrediente: {
        marginHorizontal: 12,
        fontSize: 12,
    },
    preparo: {
        marginTop: 20,
        justifyContent: 'center',
    },
    passo: {
        marginHorizontal: 12,
        fontSize: 12,
    },
});