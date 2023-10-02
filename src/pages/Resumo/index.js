import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
export default function Resumo() {

    const dados = useRoute().params;

    console.log(dados);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Resumo</Text>
                </View>
                <View>
                    <Text style={styles.subtitulo}>Itens:</Text>
                    <Text style={styles.subtitulo}>Valor R$</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 20,
        textAlign: 'center',
    },
})