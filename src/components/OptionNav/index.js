import { TouchableOpacity, StyleSheet } from "react-native";

export default function OptionNav(title, description, onPress) {

    return(
        <View>
            <TouchableOpacity onPress={() => onPress}>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({


});
