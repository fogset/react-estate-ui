import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";

function Register() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            // const res = await apiRequest.post("/auth/register", {
            //     username,
            //     email,
            //     password,
            // });
            // navigate("/login");
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: username,
                });
                console.log("user register successfully");
                // toast.success("User Registered Successfully!!", {
                //     position: "top-center",
                // });
            }
        } catch (err) {
            setError(err.message);
            console.log(error);
            // toast.success(error, {
            //     position: "bottom-center",
            // });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="registerPage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="email" type="text" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button disabled={isLoading}>Register</button>
                    {error && <span>{error}</span>}
                    <Link to="/login">Do you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default Register;
