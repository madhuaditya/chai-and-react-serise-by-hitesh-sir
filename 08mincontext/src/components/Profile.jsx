import React ,{useContext} from 'react'
import userContext from "../context/UserContext.js";
import UserContext from "../context/UserContext.js";

const Profile = () => {
    const {user}= useContext(UserContext)

        if(!user) {
            return <div>
                <h1>please first login</h1>
            </div>
        }
        else {
            return <div>
                <h1>Wecome and  Username is {user.userName}</h1>
            </div>
        }

}
export default Profile
