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

export default function LoginForm({ navigation, signInWithEmail }) {
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const handleLogin = (data) => signInWithEmail(data);
    return (
        <View style={styles.loginForm}>
            <View style={styles.loginTitleWrapper}>
                <Text style={styles.loginTitle}>
                    Sign in and start saving your notes!
                </Text>
            </View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.input}>
                        <TextInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter email"
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
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Enter password"
                            style={styles.inputText}
                            secureTextEntry={true}
                            placeholderTextColor="#a3a3a3"
                        />
                    </View>
                )}
                name="password"
            />
            {errors.password && (
                <Text style={styles.errorInput}>{errors.password.message}</Text>
            )}

            <TouchableOpacity style={styles.forgotPasswordWrapper}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={handleSubmit(handleLogin)}
                >
                    <Text style={styles.buttonLoginText}>Log In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.registerRedirect}
                onPress={() => navigation.navigate("Register")}
            >
                <Text style={styles.registerRedirectText}>
                    Don't have any account? Register here
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    loginForm: {
        flex: 4 / 5,
        justifyContent: "center",
        fontFamily: "Poppins-Regular",
    },
    loginTitleWrapper: {
        marginBottom: 20,
        marginHorizontal: 30,
        alignSelf: "center",
    },
    loginTitle: {
        color: "#d4d4d4",
        fontSize: 22,
        fontFamily: "Poppins-Medium",
    },
    input: {
        backgroundColor: "#262626",
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
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
        alignSelf: "flex-end",
        marginRight: 30,
        marginTop: 10,
    },
    forgotPassword: {
        color: "#fcd34d",
        textDecorationLine: "underline",
        fontFamily: "Poppins-Regular",
    },
    buttonLogin: {
        backgroundColor: "#fcd34d",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingVertical: 15,
        marginHorizontal: 30,
        marginTop: 30,
    },
    buttonLoginText: {
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
