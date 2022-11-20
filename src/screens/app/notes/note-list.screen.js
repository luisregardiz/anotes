import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    ActivityIndicator,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import Header from "../../../components/layout/header";
import NotesList from "../../../components/notes/list";
import { Entypo } from "@expo/vector-icons";
import { getAllNotes } from "../../../services/notesApi";
import { useFocusEffect } from "@react-navigation/native";

export default function NoteListScreen({ navigation }) {
    const [notes, setNotes] = useState([]);

    useFocusEffect(
        useCallback(() => {
            let isActive = true;
            getAllNotes().then((notes) => {
                if (isActive) {
                    setNotes(notes);
                }
            });

            return () => {
                isActive = false;
            };
        }, [])
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor="#000" />
            <FlashMessage position="center" />
            <Header navigation={navigation} />
            {/* {isLoading && <ActivityIndicator size="large" color="#fcd34d" />} */}
            <NotesList notes={notes} navigation={navigation} />
            <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => navigation.navigate("NoteNew")}
            >
                <Entypo name="plus" size={28} color="black" />
            </TouchableOpacity>
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
    buttonAdd: {
        position: "absolute",
        backgroundColor: "#fcd34d",
        bottom: 30,
        right: 30,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
