import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function RegisterForm({ navigation, signUpWithEmail }) {
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const handleRegister = (data) => signUpWithEmail(data);
    return (
        <View style={styles.registerContainer}>
            <View style={styles.registerTitleWrapper}>
                <Text style={styles.registerTitle}>Create account</Text>
            </View>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Enter email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.inputText}
                            placeholderTextColor="#a3a3a3"
                        />
                    </View>
                )}
                name="email"
            />
            {errors.email && (
                <Text style={styles.errorInput}>{errors.email.message}</Text>
            )}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Enter password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={true}
                            style={styles.inputText}
                            placeholderTextColor="#a3a3a3"
                        />
                    </View>
                )}
                name="password"
            />
            {errors.password && (
                <Text style={styles.errorInput}>{errors.password.message}</Text>
            )}

            <View>
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={handleSubmit(handleRegister)}
                >
                    <Text style={styles.buttonRegisterText}>Register</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.registerRedirect}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.registerRedirectText}>
                    Already have an account? Sign in
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    registerContainer: {
        flex: 4 / 5,
        justifyContent: "center",
        fontFamily: "Poppins-Regular",
    },
    registerTitleWrapper: {
        marginBottom: 20,
        marginHorizontal: 30,
    },
    registerTitle: {
        color: "#d4d4d4",
        fontSize: 22,
        fontFamily: "Poppins-Medium",
    },
    input: {
        backgroundColor: "#262626",
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 30,
    },
    inputText: {
        color: "#fefefe",
        fontSize: 16,
    },
    errorInput: {
        color: "#f87171",
        fontFamily: "Poppins-Regular",
        marginLeft: 30,
    },
    forgotPasswordWrapper: {
        marginLeft: 180,
        marginTop: 10,
    },
    forgotPassword: {
        color: "#fcd34d",
        textDecorationLine: "underline",
        fontFamily: "Poppins-Regular",
    },
    buttonRegister: {
        backgroundColor: "#fcd34d",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingVertical: 15,
        marginHorizontal: 30,
        marginTop: 30,
    },
    buttonRegisterText: {
        color: "#262626",
        fontSize: 16,
        fontFamily: "Poppins-Medium",
    },
    registerRedirect: {
        marginTop: 30,
        alignSelf: "center",
    },
    registerRedirectText: {
        color: "#fefefe",
        textDecorationLine: "underline",
        fontFamily: "Poppins-Regular",
    },
});
