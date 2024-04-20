import { useAuth } from '../Components/Auth/AuthContext';

function ProfilePage() {
    const { user, profile, login, logOut } = useAuth();

    return (
        <div>
            <div className={`font-serif`}>
                Actually, the login feature is under construction. You can log using google but it doesnt do anything yet. I store any user information but in your localstorage.
            </div>
            {
                profile ? (
                    <div>
                        <img src={profile.picture} alt="user image" />
                        <h3>User Logged in: {user?.client_id}</h3>
                        <p>Name: {profile.name}</p>
                        <p>Email Address: {profile.email}</p>
                        <button className={`bg-[#1a1a1a]`} onClick={logOut}>Log out</button>
                    </div>
                ) : (
                    <button onClick={login} className="bg-[#1a1a1a]">
                        Sign in with Google
                    </button>
                )
            }
        </div>
    )



}

export default ProfilePage;
