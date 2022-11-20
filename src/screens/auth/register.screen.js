import React, { useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";
import HomeButton from "../../components/layout/home-button";
import RegisterForm from "../../components/auth/register-form";
import { supabase } from "../../lib/supabase";

export default function RegisterScreen({ navigation }) {
    const [loading, setLoading] = useState(false);

    const signUpWithEmail = async (user) => {
        setLoading(true);
        const { error, data } = await supabase.auth.signUp({
            email: user.email.toLowerCase(),
            password: user.password,
        });

        if (data) {
            navigation.navigate("Login");
        }

        if (error) Alert.alert(error.message);
        setLoading(false);
    };
    return (
        <View style={styles.screenContainer}>
            <HomeButton navigation={navigation} />
            {loading && <ActivityIndicator size="large" />}
            <RegisterForm
                navigation={navigation}
                signUpWithEmail={signUpWithEmail}
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
