import "react-native-url-polyfill/auto";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MyStack from "./src/navigation";
import { SessionProvider } from "./src/context/auth/session";

export default function App() {
    const [fontLoaded] = useFonts({
        "Fredoka-One": require("./assets/fonts/FredokaOne.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    });
    if (!fontLoaded) {
        return null;
    }

    return (
        <SessionProvider>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </SessionProvider>
    );
}
