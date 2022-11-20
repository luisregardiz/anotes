import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AuthHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>notora</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignSelf: "center",
    },
    textHeader: {
        fontSize: 40,
        fontFamily: "Fredoka-One",
        color: "#fefefe",
    },
});
