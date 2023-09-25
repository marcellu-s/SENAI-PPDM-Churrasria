import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Participantes } from "../../components/Participantes";
import { listaAcompanhamento, listaCortes } from "../Services";

export default function Calcular() {

    const [ homem, setHomem ] = useState(0);
    const [ mulher, setMulher ] = useState(0);
    const [ crianca, setCrianca ] = useState(0);

    const [ linguica, setLinguica ] = useState(listaCortes[0]),
    [ picanhaSuina, setPicanhaSuina ] = useState(listaCortes[1]),
    [ panceta, setPanceta ] = useState(listaCortes[2]),
    [ coracao, setCoracao ] = useState(listaCortes[3]),
    [ coxinha, setCoxinha ] = useState(listaCortes[4]),
    [ coxa, setCoxa ] = useState(listaCortes[5]),
    [ fraldinha, setFraldinha ] = useState(listaCortes[6]),
    [ picanhaBovina, setPicanhaBovina ] = useState(listaCortes[7]),
    [ alcatra, setAlcatra ] = useState(listaCortes[8]),
    [ contra, setContra ] = useState(listaCortes[9])

    const [ paoAlho, setPaoAlho ] = useState(listaAcompanhamento[0]),
    [ queijo, setQueijo ] = useState(listaAcompanhamento[1]),
    [ farofa, setFarofa ] = useState(listaAcompanhamento[2]),
    [ paoFrances, setPaoFrances ] = useState(listaAcompanhamento[3]),
    [ arroz, setArroz ] = useState(listaAcompanhamento[4]),
    [ saladaMaionese, setSaladaMaionese ] = useState(listaAcompanhamento[5])

    function toggleCheckbox(state, setState) {

        setState({
            "check": !state.check,
            "id": state.id,
            "nome": state.nome,
            'preço': state.preço
        });
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
                        <View style={styles.option}>
                            <CheckBox key={linguica.id} onPress={() => {toggleCheckbox(linguica, setLinguica)}} checked={linguica.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={linguica.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                        <CheckBox key={picanhaSuina.id} onPress={() => toggleCheckbox(picanhaSuina, setPicanhaSuina)} checked={picanhaSuina.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={picanhaSuina.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <CheckBox key={panceta.id} onPress={() => toggleCheckbox(panceta, setPanceta)} checked={panceta.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={panceta.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <CheckBox key={coracao.id} onPress={() => toggleCheckbox(coracao, setCoracao)} checked={coracao.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={coracao.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <CheckBox key={coxinha.id} onPress={() => toggleCheckbox(coxinha, setCoxinha)} checked={coxinha.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={coxinha.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <CheckBox key={coxa.id} onPress={() => toggleCheckbox(coxa, setCoxa)} checked={coxa.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={coxa.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <CheckBox key={fraldinha.id} onPress={() => toggleCheckbox(fraldinha, setFraldinha)} checked={fraldinha.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={fraldinha.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <CheckBox key={picanhaBovina.id} onPress={() => toggleCheckbox(picanhaBovina, setPicanhaBovina)} checked={picanhaBovina.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={picanhaBovina.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <CheckBox key={alcatra.id} onPress={() => toggleCheckbox(alcatra, setAlcatra)} checked={alcatra.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={alcatra.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <CheckBox key={contra.id} onPress={() => toggleCheckbox(contra, setContra)} checked={contra.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={contra.nome} size={32} />
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{color: '#fff'}}>Receita &gt;</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>3. Acompanhamentos</Text>
                        <CheckBox key={paoAlho.id} onPress={() => {toggleCheckbox(paoAlho, setPaoAlho)}} checked={paoAlho.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={paoAlho.nome} size={32} />
                        <CheckBox key={queijo.id} onPress={() => toggleCheckbox(queijo, setQueijo)} checked={queijo.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={queijo.nome} size={32} />
                        <CheckBox key={farofa.id} onPress={() => toggleCheckbox(farofa, setFarofa)} checked={farofa.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={farofa.nome} size={32} />
                        <CheckBox key={paoFrances.id} onPress={() => toggleCheckbox(paoFrances, setPaoFrances)} checked={paoFrances.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={paoFrances.nome} size={32} />
                        <CheckBox key={arroz.id} onPress={() => toggleCheckbox(arroz, setArroz)} checked={arroz.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={arroz.nome} size={32} />
                        <CheckBox key={saladaMaionese.id} onPress={() => toggleCheckbox(saladaMaionese, setSaladaMaionese)} checked={saladaMaionese.check} iconType="material-community" checkedIcon="checkbox-outline" uncheckedIcon={'checkbox-blank-outline'} title={saladaMaionese.nome} size={32} />
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