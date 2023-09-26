import { View, StyleSheet, Text } from "react-native";
import { listaCortes } from '../../pages/Services';
import { useState } from "react";
export const ListaResumo = () => {
    const [lista, setLista] = useState(listaCortes);
    (function mostrar() {
        const nome = lista.map((dado) => dado.nome);
        console.log(nome)
    })();
    return (
        <View style={style.linha}>
            <Text></Text>
        </View>
    )
};
const style = StyleSheet.create({
    linha: {
        marginTop: '50%',
        marginLeft: '50%',
        fontSize: 50,
        textAlign: 'center',

    },
});