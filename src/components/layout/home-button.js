import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function HomeButton({ navigation }) {
    return (
        <View style={styles.buttonHomeWrapper}>
            <TouchableOpacity
                style={styles.buttonHome}
                onPress={() => navigation.navigate("Home")}
            >
                <Entypo name="home" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonHomeWrapper: {
        marginHorizontal: 30,
        marginTop: 60,
    },
    buttonHome: {
        padding: 10,
        backgroundColor: "#262626",
        alignSelf: "flex-start",
        borderRadius: 50,
    },
});
