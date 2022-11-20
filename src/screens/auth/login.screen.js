import React, { useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";
import HomeButton from "../../components/layout/home-button";
import LoginForm from "../../components/auth/login-form";
import { supabase } from "../../lib/supabase";
import { showMessage } from "react-native-flash-message";

export default function LoginScreen({ navigation }) {
    const [loading, setLoading] = useState(false);
    const signInWithEmail = async (user) => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        });

        if (error) Alert.alert(error.message);

        showMessage({
            message: "Login successfully",
            type: "success",
        });
        setLoading(false);
    };
    return (
        <View style={styles.screenContainer}>
            <HomeButton navigation={navigation} />
            {loading && <ActivityIndicator size="large" />}
            <LoginForm
                navigation={navigation}
                signInWithEmail={signInWithEmail}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#171717",
    },
});
