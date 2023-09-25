import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"; 
import { Minus, Plus } from "lucide-react-native";


export function Participantes(props) {

    function changeItem(state, value) {
    
        if (value < 0) {

            state(0);
        } else if (value > 30) {

            state(30);
        } else {
            state(value)
        }
    }
    
    return(
        <View style={{ padding: 20 }}>
            <Text style={styles.text}>{props.text}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity style={styles.addItemLeft} onPress={() => props.setState((old) => old < 30 ? Number(old) + 1 : old ) }>
                    <Plus color="#000" size={24} />
                </TouchableOpacity>
                <TextInput style={styles.textInput} value={props.state.toString()} keyboardType="numeric" onChangeText={(value) => changeItem(props.setState, value)} />
                <TouchableOpacity style={styles.addItemRight} onPress={() => props.setState((old) => old > 0 ? Number(old) - 1 : old ) }>
                    <Minus color="#000" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
});