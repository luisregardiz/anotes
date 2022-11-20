import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotesTabs from "./notes/note-tabs.navigation";
import ProfileScreen from "../../screens/app/user/profile.screen";
import NoteDetailsScreen from "../../screens/app/notes/note-details.screen";
import NoteNewScreen from "../../screens/app/notes/note-new.screen";

export default function AppNavigation() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="NotesTabs" component={NotesTabs} />
            <Stack.Screen name="NoteDetail" component={NoteDetailsScreen} />
            <Stack.Screen name="NoteNew" component={NoteNewScreen} />
            <Stack.Screen name="UserProfile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}
