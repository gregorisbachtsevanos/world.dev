import React from "react";
import { Link, useParams } from "react-router-dom";

const Profile = ({ user }) => {
    const { username } = useParams();
    console.log(user);
    return <div>{username}</div>;
};

export default Profile;
