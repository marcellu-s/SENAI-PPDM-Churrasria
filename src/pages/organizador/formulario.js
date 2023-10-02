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


<Text style={styles.title}>Organizador</Text>

<Text style={styles.title}>Por favor preencha as informações abaixo </Text>


<View>
    <TextInput style={styles.input}
     onChangeText={setNome}
     value={nome}/>
    
    
    <TextInput style={styles.input}
     onChangeText={setTelefone}
     value={nome}/>
    
    <TextInput style={styles.input}
     onChangeText={setCEP}
     value={nome}/>
    
    <TextInput style={styles.input}
     onChangeText={setUF}
     value={nome}/>
    
    <TextInput style={styles.input}
     onChangeText={setEndereco}
     value={nome}/>
    
     <TextInput style={styles.input}
      onChangeText={setNumero}
      value={nome}/>
    
    <TextInput style={styles.input}
     onChangeText={setBairro}
     value={nome}/>
    
    <TextInput style={styles.input}
     onChangeText={setValorlocacao}
     value={nome}/>
</View>


 <TouchableOpacity style={styles.button} onPress={() => salvar()}>
 <Text style={styles.textButton}>Enviar</Text>
 </TouchableOpacity>




</View>


);


}


const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor:'#F0F4FF',
    paddingHorizontal:18,
    justifyContent: 'center'


    },


    title:{
        fontSize: 34,
        marginBottom: 34,
        color: '#3333333',
        fontWeight: 'bold',


    },

    input: {
        borderWidth: 1,
    }


});
