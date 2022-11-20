import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { generateColor } from "../../utilities/generateColor.utility";
import React from "react";
import moment from "moment";
export default function NoteCard({ note, navigation }) {
    const dateFormatted = moment(note.created_at).format("L");
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("NoteDetail", {
                    note,
                })
            }
        >
            <View style={[styles.note, { backgroundColor: generateColor() }]}>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.noteDate}>{dateFormatted}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    note: {
        marginVertical: 10,

        padding: 15,
        borderRadius: 10,
    },
    noteTitle: {
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        marginBottom: 10,
    },
    noteDate: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "#00000090",
    },
});
