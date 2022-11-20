import React, { useContext } from "react";
import { SessionContext } from "../context/auth/session";
import AppNavigation from "./app/app.navigation";
import AuthNavigation from "./auth/auth.navigation";

export default function MyStack() {
    const { session } = useContext(SessionContext);

    return (
        <>{session && session.user ? <AppNavigation /> : <AuthNavigation />}</>
    );
}
