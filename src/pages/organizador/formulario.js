import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function Formulario(){

    const navigation = useNavigation();


    const [ cidade, setCidade ] = useState('');
    const [ uf, setUF ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ bairro, setBairro ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ valorLocacao, setValorLocacao ] = useState('');
    const [ cep, setCep ] = useState('');

    function salvar(){
        if( nome === '' && telefone ==='' && cep === '' && uf ==='' && cidade === '' && endereco ==='' && numero === '' && bairro ==='' ){
            alert('Por favor, preencha todos os campos com *.')
            return;
        }

        const infoEvento = {
            nome, telefone, numero, valorLocacao, cep, cidade, uf, endereco, bairro
        };
        
        navigation.navigate('Calcular', infoEvento);
    }

    async function getAddressViaCep(cep) {

        const valid = /^[0-9]{8}$/;

        cep = cep.replace(/\D/gm, '');

        if (valid.test(cep)) {

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

            const data = await response.json();

            setCidade(data.localidade);
            setBairro(data.bairro);
            setEndereco(data.logradouro);
            setUF(data.uf);
        }

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ padding: 20 }}>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', paddingTop: 20 }}>Organizador do evento</Text>
                    <View style={{ width: 75, height: 10, backgroundColor: '#EF233C'}}>
                        <Text></Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.subtitle}>Por favor, preencha as informações abaixo ;)</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>*Nome:</Text>
                        <TextInput style={styles.input} onChangeText={(value) => setNome(value)} placeholder='Informe seu nome' />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>*Telefone:</Text>
                        <TextInput keyboardType="numeric" style={styles.input} onChangeText={(value) => setTelefone(value)} placeholder='DDD XXXXX-XXXX' />
                    </View>
                    <View style={styles.inputWrapperDouble}>
                        <View style={styles.inputContainerDouble}>
                            <Text style={styles.label}>*CEP:</Text>
                            <TextInput keyboardType="numeric" onChangeText={(value) => { setCep(value); getAddressViaCep(value); }} style={styles.input} placeholder='XXXXX-XXX' />
                        </View>
                        <View style={styles.inputContainerDouble}>
                            <Text style={styles.label}>*Cidade:</Text>
                            <TextInput value={cidade} style={styles.input} placeholder='...' editable={false} />
                        </View>
                    </View>
                    <View style={styles.inputWrapperDouble}>
                        <View style={styles.inputContainerDouble}>
                            <Text style={styles.label}>*Bairro:</Text>
                            <TextInput value={bairro} style={styles.input} placeholder='...' editable={false} />
                        </View>
                        <View style={styles.inputContainerDouble}>
                            <Text style={styles.label}>*UF:</Text>
                            <TextInput value={uf} style={styles.input} placeholder='...' editable={false} />
                        </View>
                    </View>
                    <View style={styles.inputWrapperDouble}>
                        <View style={styles.inputContainerDouble}>
                            <Text style={styles.label}>*Rua:</Text>
                            <TextInput value={uf} style={styles.input} placeholder='...' editable={false} />
                        </View>
                        <View style={styles.inputContainerDouble}>
                            <Text style={styles.label}>*Nº:</Text>
                            <TextInput keyboardType="numeric" style={styles.input} onChangeText={(value) => setNumero(value) } placeholder='Número do local' />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Preço da locação: (Opcional)</Text>
                        <TextInput keyboardType="numeric" style={styles.input} onChangeText={(value) => setValorLocacao(value) } placeholder='Informe o preço do local do evento, caso existir' />
                    </View>
                </View>
                <View style={{ marginVertical: 20, paddingVertical: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={() => salvar()}>
                        <Text style={{ fontSize: 24, color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    subtitle: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center'
    },

    inputWrapper: {
        marginTop: 20,
        gap: 12
    },

    inputContainer: {
        gap: 6,
    },

    inputWrapperDouble: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12
    },  

    label: {
        fontSize: 16,
        fontWeight: '500'
    },

    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        color: '#000',
    },

    inputContainerDouble: {
        flexGrow: 1
    },  

    button: {
        width: '100%',
        backgroundColor: '#EF233C',
        padding: 12,
        borderRadius: 8
    }
    
    // inputLocacao: {
    //     borderWidth: 1,
    //     borderColor: '#999999',
    //     borderRadius: 10,
    //     height: 50,
    //     width: 190,
    //     paddingLeft: 10,
    //     marginLeft: 5, 
    //     marginRight: 5,
    //     marginTop: 20,
    //     fontSize: 15,

    // },
});
