import './Nav.css';
import Form from './form/Form.js'

export default function Nav({ user, setUser }) {

    return (
        <div id="nav">
            <p>Welcome! {user && user.username.charAt(0).toUpperCase() + user.username.slice(1)}</p>
            {!user && <Form user={user} setUser={setUser} />}
        </div>
    )
}