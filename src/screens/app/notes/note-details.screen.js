import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import HeaderSecondary from "../../../components/layout/header-secondary";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function NoteDetailsScreen({ route, navigation }) {
    const { note } = route.params;
    const schemaNotes = yup.object({
        title: yup.string().required(),
        content: yup.string(),
        category: yup.string(),
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: note.title,
            content: note.content,
        },
        resolver: yupResolver(schemaNotes),
    });

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSecondary navigation={navigation} />
            <View style={styles.noteWrapper}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Title..."
                                style={styles.title}
                                placeholderTextColor="#a3a3a3"
                            />
                        </View>
                    )}
                    name="title"
                />

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Content..."
                                style={styles.content}
                                placeholderTextColor="#a3a3a3"
                            />
                        </View>
                    )}
                    name="content"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",
        paddingTop: 10,
    },
    noteWrapper: {
        marginHorizontal: 30,
        marginTop: 20,
    },
    title: {
        color: "#fefefe",
        fontFamily: "Poppins-Bold",
        fontSize: 35,
    },
    content: {
        color: "#fefefe",
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        paddingTop: 10,
    },
});
