import { useAuth } from '../Components/Auth/AuthContext';

function ProfilePage() {
    const { user, profile, login, logOut } = useAuth();

    return profile ? (
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
    );
}

export default ProfilePage;
