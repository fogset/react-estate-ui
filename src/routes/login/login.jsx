import "./login.scss";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    //const { updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        const formData = new FormData(e.target);

        const email = formData.get("email");
        const password = formData.get("password");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                console.log("user login successfully");
                navigate("/");
            }
        } catch (err) {
            setError(err.message);
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome back</h1>
                    <input
                        name="email"
                        required
                        minLength={3}
                        maxLength={20}
                        type="text"
                        placeholder="email"
                    />
                    <input name="password" type="password" required placeholder="Password" />
                    <button disabled={isLoading}>Login</button>
                    {error && <span>{error}</span>}
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default Login;
