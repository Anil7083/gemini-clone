import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";
const auth = getAuth(app);

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser({
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                });
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;