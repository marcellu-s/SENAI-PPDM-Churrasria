import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";

export default function Resumo () {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Resumo</Text>
            </View>
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