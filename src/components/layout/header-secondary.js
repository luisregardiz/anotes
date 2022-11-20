import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function HeaderSecondary({
    navigation,
    saveActive,
    handle,
    isSave,
    isUpdate,
}) {
    return (
        <View style={styles.headerProfile}>
            <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => navigation.goBack()}
            >
                <Entypo name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            {isSave && (
                <TouchableOpacity
                    style={styles.buttonSave}
                    onPress={handle}
                    disabled={!saveActive}
                    activeOpacity={saveActive ? 0.5 : 1}
                >
                    <Text style={styles.buttonSaveText}>Save</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    buttonSave: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#262626",
        alignSelf: "flex-start",
        borderRadius: 50,
    },
    buttonSaveText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Poppins-Medium",
    },
    buttonBack: {
        padding: 10,
        backgroundColor: "#262626",
        alignSelf: "flex-start",
        borderRadius: 50,
    },
    headerProfile: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 10,
    },
});
