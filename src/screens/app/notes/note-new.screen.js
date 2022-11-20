import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import HeaderSecondary from "../../../components/layout/header-secondary";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { supabase } from "../../../lib/supabase";
import { SessionContext } from "../../../context/auth/session";
import { categoryColorButton } from "../../../utilities/categoryColorButton";

export default function NoteNewScreen({ navigation }) {
    const categoryIdDefault = "afe972f3-3158-4014-9752-df268884683d";
    const { session } = useContext(SessionContext);

    const [categories, setCategories] = useState([]);
    const [categorySelected, setCategorySelected] = useState(categoryIdDefault);
    useEffect(() => {
        const getCategories = async () => {
            const { data: categories, error } = await supabase
                .from("categories")
                .select("*");

            if (categories) setCategories(categories);
        };

        getCategories();
    }, []);
    const schemaNotes = yup.object({
        title: yup.string().required(),
        content: yup.string(),
        category: yup.string(),
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(schemaNotes),
    });

    const handleCreateNote = async (data) => {
        const newNote = {
            title: data.title,
            content: data.content,
            category_id: categorySelected,
            user_id: session?.user.id,
        };
        await supabase.from("notes").insert(newNote);
    };

    const titleExist = watch("title") ? true : false;

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSecondary
                navigation={navigation}
                saveActive={titleExist}
                handle={handleSubmit(handleCreateNote)}
                isSave={true}
            />
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
                                placeholderTextColor="#737373"
                            />
                        </View>
                    )}
                    name="title"
                />
                {errors.title && (
                    <Text style={styles.titleError}>Title is required.</Text>
                )}
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
                                placeholderTextColor="#737373"
                            />
                        </View>
                    )}
                    name="content"
                />
            </View>
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoryTitle}>Categories:</Text>
                <View style={styles.categoriesButton}>
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category.id}
                            style={[
                                styles.categoryButton,
                                {
                                    backgroundColor: categoryColorButton(
                                        category.name
                                    ),
                                },
                            ]}
                            onPress={() => setCategorySelected(category.id)}
                        >
                            <Text style={styles.categoryButtonText}>
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
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
        flex: 1,
    },
    title: {
        color: "#fefefe",
        fontFamily: "Poppins-Bold",
        fontSize: 35,
    },
    titleError: {
        color: "#f87171",
    },
    content: {
        color: "#fefefe",
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        paddingTop: 10,
    },
    categoriesWrapper: {
        backgroundColor: "#262626",
        paddingTop: 20,
        paddingBottom: 20,
    },
    categoryTitle: {
        color: "#fafafa",
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    categoriesButton: {
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection: "row",
    },
    categoryButton: {
        padding: 10,
        backgroundColor: "#171717",
        marginRight: 10,
        borderRadius: 10,
    },
    categoryButtonText: {
        color: "#171717",
        fontFamily: "Poppins-Medium",
        fontSize: 16,
    },
});
