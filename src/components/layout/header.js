import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SessionContext } from "../../context/auth/session";

export default function Header({ navigation }) {
    const { session } = useContext(SessionContext);
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>notora</Text>
            {session?.user && (
                <TouchableOpacity
                    onPress={() => navigation.navigate("UserProfile")}
                    style={styles.avatar}
                >
                    <Text style={styles.avatarText}>
                        {session?.user.email.charAt(0)}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textHeader: {
        fontSize: 30,
        fontFamily: "Fredoka-One",
        color: "#fefefe",
    },
    avatar: {
        backgroundColor: "#fcd34d",
        height: 35,
        width: 35,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    avatarText: {
        fontSize: 18,
        fontFamily: "Poppins-Bold",
        textTransform: "uppercase",
    },
});
