import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomeBttn = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
            <View style={styles.topSection}>
                <Text style={styles.tittle}>{props.tittle}</Text>
            </View>
            <View style={styles.bottomPart}>
                <Text style={styles.description}>Descrição</Text>
                <Text style={styles.arrow}>&gt;</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        paddingTop: 13,
        paddingBottom: 14,
        paddingHorizontal: 17,
        paddingLeft: 16,
        paddingRight: 30,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginBottom: 20,
    },
    topSection: {
        flexDirection: 'row',
    },
    tittle: {
        fontWeight: '600',
        fontSize: 22,
    },
    bottomPart: {
        flexDirection: 'row',
        alignItems: 'center', // Alinhar os itens verticalmente na parte inferior
        justifyContent: 'space-between',
    },
    description: {
        color: 'grey',
        fontSize: 16,
    },
    arrow: {
        fontSize: 35,
        fontWeight: '500',
    },
});

export default HomeBttn;