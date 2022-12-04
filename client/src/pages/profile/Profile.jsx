import React from "react";
import { Link, useParams } from "react-router-dom";

const Profile = ({ user }) => {
    const { username } = useParams();
    return (
        <div>
            {username}
            <Link to={`new-article`}>New Article</Link>
        </div>
    );
};

export default Profile;
