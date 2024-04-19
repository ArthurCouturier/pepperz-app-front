import { useAuth } from '../Components/Auth/AuthContext';

function ProfilePage() {
    const { user, profile, login, logOut } = useAuth();

    return (
        <div>
            Actually, the login feature is under construction. You can log using google but it doesnt do anything yet. I store any user information but in your localstorage.
            {
                profile ? (
                    <div>
                        <img src={profile.picture} alt="user image" />
                        <h3>User Logged in: {user?.client_id}</h3>
                        <p>Name: {profile.name}</p>
                        <p>Email Address: {profile.email}</p>
                        <button onClick={logOut}>Log out</button>
                    </div>
                ) : (
                    <button onClick={login} className="login-button">
                        Sign in with Google
                    </button>
                )
            }
        </div>
    )



}

export default ProfilePage;
