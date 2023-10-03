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
        if( nome === '' || telefone ==='' || cep === '' || uf ==='' || endereco ==='' || numero === '' || bairro ==='' ){
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
        console.log (salvar);

    }


return (
<View style={styles.container}>


<Text style={styles.title1}>Organizador do evento</Text>
<View style={styles.container2}> </View>

<Text style={styles.title}>Por favor preencha as informações abaixo </Text>


<View>
<Text style={styles.textInput}>Nome: </Text>
    <TextInput style={styles.input}
     onChangeText={setNome}
     value={nome}/>
    
    <Text style={styles.textInput}>Telefone: </Text>
    <TextInput style={styles.input}
     onChangeText={setTelefone}
     value={telefone}/>
     
     <Text style={styles.textInput}>CEP: </Text>
    <TextInput style={styles.input}
     onChangeText={setCEP}
     value={cep}/>

    <Text style={styles.textInput}>UF: </Text>
    <TextInput style={styles.input}
     onChangeText={setUF}
     value={uf}/>
    
    <Text style={styles.textInput}>Endereço: </Text>
    <TextInput style={styles.input}
     onChangeText={setEndereco}
     value={endereco}/>
    
    <Text style={styles.textInput}>N°: </Text>
     <TextInput style={styles.input}
      onChangeText={setNumero}
      value={numero}/>
    
    <Text style={styles.textInput}>Bairro: </Text>
    <TextInput style={styles.input}
     onChangeText={setBairro}
     value={bairro}/>
    
    <Text style={styles.textInput}>Valor locação *opcional: </Text>
    <TextInput style={styles.input}
     onChangeText={setValorlocacao}
     value={valorLocacao}/>
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
    paddingHorizontal: 18,
    justifyContent: 'center',
        
    },

    container2: {
        backgroundColor: '#E21010',
        height: 12,
        width: 112,

    },


    title: {
        fontSize: 34,
        marginTop:15,
        marginBottom: 34,
        color: '#333333',
        fontWeight: 'bold',

    },

    
    title1: {
        fontSize: 34,
        marginTop:15,
        marginBottom: 34,
        color: '#000000',
        fontWeight: 'bold',

    },

    input: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        border: 1,
        height: 50,
        width: 400,
    },

    textInput: {
        fontSize: 15,
        color: '#333333',
        fontWeight: 'bold',

    },

    button: {
        height: 50,
        width: 400,
        backgroundColor: '#EF233C',
        borderRadius: 15,
        fontSize: 25,

    },


});
