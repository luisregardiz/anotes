import { supabase } from "../lib/supabase";

export const getAllNotes = async () => {
    const { data: notes } = await supabase.from("notes").select("*");

    return notes;
};
