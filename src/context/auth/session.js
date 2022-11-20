import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export const SessionContext = createContext({});

export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                setSession(session);
            }
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                setSession(session);
            }
            setSession(session);
        });
    }, []);

    return (
        <SessionContext.Provider
            value={{
                session,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
};
