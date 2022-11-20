import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import Header from "../../../components/layout/header";

export default function NotesCategoriesScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor="#000" />
            <FlashMessage position="center" />
            <Header navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",
        paddingTop: 15,
        color: "#fefefe",
    },
    noteListWrapper: {
        marginVertical: 0,
    },
});
