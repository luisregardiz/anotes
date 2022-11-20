import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import NotesCategoriesScreen from "../../../screens/app/notes/notes-categories.screen";
import NoteListScreen from "../../../screens/app/notes/note-list.screen";

export default function NotesTabs() {
    const Tab = createBottomTabNavigator();
    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "All Notes") {
                iconName = focused ? "document-text" : "document-text-outline";
            } else if (rn === "Categories") {
                iconName = focused ? "filter" : "filter-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
            backgroundColor: "#171717",
            borderTopWidth: 0,
        },
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        tabBarActiveTintColor: "#fff",

        headerShown: false,
    });

    return (
        <Tab.Navigator {...{ screenOptions }}>
            <Tab.Screen name="All Notes" component={NoteListScreen} />
            <Tab.Screen name="Categories" component={NotesCategoriesScreen} />
        </Tab.Navigator>
    );
}
