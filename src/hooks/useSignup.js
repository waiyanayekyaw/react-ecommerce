import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const signup = async (username, email, password) => {
        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // console.log(userCredential);

            let ref = collection(db, "users");
            await addDoc(ref, {
                uid: user.uid,
                displayName: username,
                email,
            });

            setLoading(false);
            navigate("/login");
        } catch (e) {
            setLoading(false);
            setError(e.message);
        }
    };

    return { error, loading, signup };
};
