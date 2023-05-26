import './Home.css';
import SignUp from "./SignUp.js"
import Logo from './Logo';

export default function Home({ user, setUser }) {
    function logout() {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                console.log("Successfully logged out")
            } else {
                console.log("Logout was unsuccessful")
            }
        });
    }

    return (
        <div id="home">
            <Logo />
            {user ? null : <SignUp user={user} />}
            <button id="btn" onClick={logout}>Logout</button>
        </div>
    );
}