import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import { supabase } from "../../../lib/supabase";
import { SessionContext } from "../../../context/auth/session";
import HeaderSecondary from "../../../components/layout/header-secondary";

export default function ProfileScreen({ navigation }) {
    const { session } = useContext(SessionContext);
    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) Alert.alert(error.message);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor="#000" />
            <FlashMessage position="center" />
            <HeaderSecondary navigation={navigation} />
            {session?.user && (
                <>
                    <View style={styles.avatarProfile}>
                        <Text style={styles.avatarProfileText}>
                            {session?.user.email.charAt(0)}
                        </Text>
                    </View>
                </>
            )}

            <TouchableOpacity
                style={styles.buttonLogout}
                onPress={handleLogout}
            >
                <Text style={styles.buttonLogoutText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#171717",
        paddingTop: 15,
        color: "#fefefe",
    },
    noteListWrapper: {
        marginVertical: 0,
    },
    avatarContainer: {
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 30,
    },
    avatarProfile: {
        alignSelf: "center",
        marginBottom: 20,
        backgroundColor: "#fcd34d",
        height: 100,
        width: 100,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    avatarProfileText: {
        fontSize: 30,
        fontFamily: "Poppins-Bold",
        textTransform: "uppercase",
    },

    buttonLogout: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#ef4444",
        marginHorizontal: 30,
        paddingVertical: 15,
    },
    buttonLogoutText: {
        color: "#fefefe",
        fontSize: 16,
        fontFamily: "Poppins-Medium",
    },
});
