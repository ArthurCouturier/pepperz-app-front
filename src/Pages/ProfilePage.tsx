import { Link } from 'react-router-dom';
import { useAuth } from '../Components/Auth/AuthContext';

function ProfilePage() {

    const { profile, login, logOut } = useAuth();

    return (
        <div>
            {
                profile ? (
                    <div className={"my-4"}>
                        <div className={"flex justify-center my-2"}>
                            <img src={profile.picture} alt="user image" />
                        </div>
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
            {profile && profile?.shouldBeAdmin ? (
                <Link to="/peppers/admin/validate"> Validate Peppers </Link>
            ) : (<></>)
            }
        </div>
    );

}

export default ProfilePage;
