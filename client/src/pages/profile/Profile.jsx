import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Profile = ({ user }) => {
    const { username } = useParams();

    useEffect(() => {
        const getUsersInfo = async () => {
            const res = await fetch(`http://localhost:3001/${username}`);
            const data = res.json();
            console.log(data);
        };
        getUsersInfo();
    }, []);

    return (
        <Card className="my-3 p-5 w-75 text-start">
            <Card.Title className="m-auto">
                <Card.Text>
                    {user.firstname} {user.lastname}
                </Card.Text>
            </Card.Title>
            <Card.Title className="m-auto">
                <Card.Text>{user.username}</Card.Text>
            </Card.Title>
        </Card>
    );
};

export default Profile;
