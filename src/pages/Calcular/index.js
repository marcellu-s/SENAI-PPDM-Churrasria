import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Participantes } from "../../components/Participantes";
import { listaAcompanhamento, listaCortes, listaSuprimento, listaBebidas } from "../Services";
// import ModalReceita from "../../components/ModalReceita/index"


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
            setSuprimento(suprimentoTemp.map((data) => {

                if (data.id == id) {
    
                    data.check = !data.check;
                }
    
                return data;
            }));
        }
        
    };

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
                                        <TouchableOpacity style={styles.optionBtn}>
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
                                        <CheckBox key={item.id} onPress={() => {toggleCheckbox(item.id, 'acompanhamento')}} checked={item.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={item.nome} size={32} />
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
                                        <CheckBox key={item.id} onPress={() => {toggleCheckbox(item.id, 'suprimento')}} checked={item.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={item.nome} size={32} />
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
                                        <CheckBox key={item.id} onPress={() => {toggleCheckbox(item.id, 'bebida')}} checked={item.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={item.nome} size={32} />
                                        <Text>R$ {item.preco}</Text>
                                    </View>
    
                                )
                            })
                        }
                    </View>
                </View>
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
