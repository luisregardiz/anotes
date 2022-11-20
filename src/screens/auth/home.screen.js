import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import SVGHome from "../../../assets/home-image.svg";

import FlashMessage from "react-native-flash-message";
import AuthHeader from "../../components/layout/auth-header";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="light" />
            <FlashMessage position="top" />
            <AuthHeader />
            <SVGHome width={300} height={300} style={styles.homeImage} />
            <View>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonLoginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.buttonRegisterText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#171717",
        fontFamily: "Poppins-Regular",
    },
    homeImage: {
        alignSelf: "center",
        marginBottom: 10,
    },
    buttonLogin: {
        backgroundColor: "#262626",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 30,
        marginBottom: 15,
    },
    buttonLoginText: {
        color: "#fefefe",
        fontSize: 16,
        fontFamily: "Poppins-Medium",
    },
    buttonRegister: {
        backgroundColor: "#fcd34d",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 30,
        padding: 15,
    },
    buttonRegisterText: {
        color: "#262626",
        fontSize: 16,
        fontFamily: "Poppins-Medium",
    },
});
