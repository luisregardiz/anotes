import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import React from "react";
import NoteCard from "./note-card";

export default function NotesList({ notes, navigation }) {
    const renderNotes = ({ item }) => (
        <NoteCard note={item} navigation={navigation} />
    );
    return (
        <SafeAreaView style={styles.notesWrapper}>
            <FlatList
                data={notes}
                style={styles.notesList}
                renderItem={renderNotes}
                keyExtractor={(note) => note.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    notesWrapper: {
        flex: 1,
    },
    notesList: {
        paddingHorizontal: 20,
    },
});
