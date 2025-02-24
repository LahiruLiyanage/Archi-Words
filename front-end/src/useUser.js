import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(getAuth(), function (user) {
            setUser(user);
            setIsLoading(false);
        });

        return unSubscribe;
    }, [])

    return { isLoading, user };
}

export default useUser;
