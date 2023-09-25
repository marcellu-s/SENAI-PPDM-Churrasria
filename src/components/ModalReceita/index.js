import { useState } from "react";
import { Text, View, Image, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { receitaria } from "../../pages/Services";


const Modalreceita = () => {

    const [modalVisibility, setVisibility] = useState(true)

    alimento = 'linguiça';

    const receita = receitaria[alimento];

    const ingredientes = receita['ingrediente'];
    const passosPreparo = receita['modo de preparo'];

    console.log(receita.image)

    const ingredientesJSX = () => {
        let jsx = [];

        for (const ingrediente of ingredientes) {
            jsx.push(<Text style={styles.ingrediente}><Text>&bull;</Text> {ingrediente}</Text>)
        }

        return jsx;
    };

    const passosPreparoJSX = () => {
        let jsx = [];

        for (const [index, passo] of passosPreparo.entries()) {
            jsx.push(<Text style={styles.passo}><Text>{index}-</Text> {passo}</Text>)
        }

        return jsx;
    };

    return (
    <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <View style={styles.modalContainer}>
            <View style={styles.upperPart}>
                <Text>{receita.titulo}</Text>
                <TouchableOpacity>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.upperPart}>
                <Image source={{ uri: receita.image}} style={{ width: 200, height: 100 }}></Image>
                <View style={styles.upperInfos}>
                    <View>
                        <Text>Dificuldade</Text>
                        <Text>{receita.dificuldade}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Tempo</Text>
                        <Text>{receita.tempo}</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Rendimento</Text>
                        <Text>{receita.rendimento}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.ingredientes}>
                <Text style={{fontWeight: '600', fontSize: 12}}>Ingredientes</Text>
                <View>{ingredientesJSX()}</View>
            </View>

            <View style={styles.preparo}>
                <Text style={{fontWeight: '600', fontSize: 12}}>Modo de preparo</Text>
                <View>{passosPreparoJSX()}</View>
            </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 0.3,
        width: '85%',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    upperPart: {
        
    },
    upperInfos: {},
    ingredientes: {},
    ingrediente: {
        fontSize: 12,
    },
    preparo: {
        justifyContent: 'center',
        padding: 20,
    },
    passo: {
        fontSize: 12,
    },

});

export default Modalreceita;