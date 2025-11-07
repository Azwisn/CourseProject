const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
    const googleLogin = () => {
        window.location.href = `${API_URL}/auth/google-login`;
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={googleLogin}>Login with Google</button>
        </div>
    );
}
