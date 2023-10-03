import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';



export default function Formulario(){
    const[nome, setNome] = useState('');
    const[telefone, setTelefone] = useState('');
    const[cep, setCEP] = useState('');
    const[uf, setUF] = useState('');
    const[endereco, setEndereco] = useState('');
    const[numero, setNumero] = useState('');
    const[bairro, setBairro] = useState('');
    const[valorLocacao, setValorlocacao] = useState('');





    function salvar(){
        if( nome === '' && telefone ==='' && cep === '' && uf ==='' && endereco ==='' && numero === '' && bairro ==='' ){
            alert('Por favor, preencha os campos.')
            return;
        }

        const data = {
            nome,
            telefone,
            cep,
            uf,
            endereco,
            numero,
            bairro,
            valorLocacao
        }
        console.log (data);

    }


return (
<View style={styles.container}>


<Text style={styles.title1}>Organizador do evento</Text>


<Text style={styles.title}>Por favor, preencha as informações abaixo ;)</Text>


<View>
<Text style={styles.textInput}>Nome: </Text>
    <TextInput style={styles.input}
     onChangeText={setNome}
     value={nome}/>
    
    <Text style={styles.textInput}>Telefone: </Text>
    <TextInput style={styles.input}
     onChangeText={setTelefone}
     value={telefone}/>

     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
            <Text style={styles.textInput}>CEP: </Text>
            <TextInput style={styles.inputCep}
            onChangeText={setCEP}
            value={cep}/>
        </View>
        <View>
            <Text style={styles.textInput}>UF: </Text>
            <TextInput style={styles.inputUf}
            onChangeText={setUF}
            value={uf}/>
        </View>
     </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
            <Text style={styles.textInputEndereco}>Endereço: </Text>
            <TextInput style={styles.inputEndereco}
            onChangeText={setEndereco}
            value={endereco}/>
        </View>
        <View>
            <Text style={styles.textInputN}>N°: </Text>
            <TextInput style={styles.inputN}
            onChangeText={setNumero}
            value={numero}/>
        </View>
    </View>
    
    <Text style={styles.textInputBairro}>Bairro: </Text>
        <Text style={styles.textInputLocacao}>Valor locação *opcional: </Text>
    <View style={styles.div}>
    <TextInput style={styles.inputBairro}
     onChangeText={setBairro}
     value={bairro}/>
    
    <TextInput style={styles.inputLocacao}
     onChangeText={setValorlocacao}
     value={valorLocacao}/>
     </View>
</View>


 <TouchableOpacity style={styles.button} onPress={() => salvar()}>
 <Text style={styles.textButton}>Enviar</Text>
 </TouchableOpacity>


</View>


);
}




const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'#F0F4FF',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
        
    },


    title: {
        fontSize: 30,       
        marginTop:5,
        marginLeft: 35,
        marginBottom: 25,
        color: '#333333',
        fontWeight: 'bold',

    },

    
    title1: {
        fontSize: 34,
        marginTop:5,
        marginBottom: 10,
        color: '#000000',
        fontWeight: 'bold',

    },

    input: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        height: 50,
        width: 380,
        paddingLeft: 10,
        marginTop: 10,
        marginLeft: 15,

    },

    inputCep: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        height: 50,
        width: 150,
        paddingLeft: 10,
        marginTop: 10,
        marginLeft: 15,
    },
    
    
    inputUf: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        height: 50,
        width: 150,
        paddingLeft: 10,
        marginTop: 10,
        marginLeft: 15,

        
    },
    
    inputEndereco: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        height: 50,
        width: 250,
        paddingLeft: 10,
        marginTop: 10,
    },

    inputN: {
        
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        height: 50,
        width: 60,
        paddingLeft: 10,
        marginTop: 20,
    },

    div:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,

    },

    textInputDiv:{

        marginRight: 4,
        fontSize: 15,
        marginLeft: 5,
        color: '#333333',
        fontWeight: 'bold',


    },
    textInputN:{
        marginRight: 4,
        fontSize: 15,
        marginLeft: 5,
        color: '#333333',
        fontWeight: 'bold',


    },
    
    textInputLocacao:{
        
        marginRight: 4,
        fontSize: 15,
        marginLeft: 5,
        color: '#333333',
        fontWeight: 'bold',


    },
    
    textInputBairro:{
        
        marginRight: 100,
        fontSize: 15,
        marginLeft: 5,
        color: '#333333',
        fontWeight: 'bold',


    },
    
    textInputEndereco:{
        marginBottom: 15,
        marginRight: 4,
        fontSize: 15,
        marginLeft: 5,
        color: '#333333',
        fontWeight: 'bold',


    },
    
    

    inputBairro: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        height: 50,
        width: 180,
        paddingLeft: 10,
        marginTop: 10,
    },

    inputLocacao: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        height: 50,
        width: 180,
        paddingLeft: 10,
        marginTop: 10,
    },

    textInput: {
        paddingTop: 10,
        fontSize: 15,
        marginLeft: 5,
        color: '#333333',
        fontWeight: 'bold',
        marginLeft: 20,

    },

    button: {
        paddingTop: 8,
        alignItems: 'center',
        textAlign:'justify',
        marginTop: 50,
        height: 40,
        width: 220,
        backgroundColor: '#EF233C',
        borderRadius: 10,
        color: '#FFFFFF',

    },

    textButton:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 16,

    },

    


});
