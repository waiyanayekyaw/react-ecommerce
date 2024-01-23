import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const useLogout = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    let logout = async () => {
        try {
            setLoading(true);
            const userCredential = await signOut(auth);
            const user = userCredential.user;

            setLoading(false);
            navigate("/login");
            return user;
        } catch (e) {
            setLoading(false);
            setError(e.message);
        }
    };

    return { error, loading, logout };
};
