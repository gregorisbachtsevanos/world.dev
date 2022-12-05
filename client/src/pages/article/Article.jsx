import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export const Article = () => {
    const [articleInfo, setArticleInfo] = useState(null);
    const { article } = useParams();

    console.log(article);
    useEffect(() => {
        const getArticle = async () => {
            const res = await fetch(`http://localhost:3001/article/${article}`);

            const data = await res.json();
            setArticleInfo(data[0]);
        };

        getArticle();
    }, []);

    console.log(articleInfo);

    return (
        <>
            {articleInfo && (
                <Card className="my-3 p-5 w-75 text-start">
                    <Card.Title className=" m-auto">
                        <Card.Text>
                            <Link
                                className="text-decoration-none text-dark"
                                to={articleInfo.author.username}
                            >
                                {articleInfo.author.firstname}
                                {articleInfo.author.lastname}
                            </Link>
                        </Card.Text>
                    </Card.Title>
                    <Card.Body className="w-100 m-auto">
                        <Link
                            className="text-decoration-none text-dark"
                            to={`article/${articleInfo.title}`}
                        >
                            <Card.Text>{articleInfo.title}</Card.Text>
                        </Link>
                    </Card.Body>
                </Card>
            )}
        </>
    );
};
