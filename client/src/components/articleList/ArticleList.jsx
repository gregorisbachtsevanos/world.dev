import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// const articles = [
//     {
//         image: "https://via.placeholder.com/600x200.png",
//         author: "Jean-Remy Duboc",
//         title: "Article",
//     },
//     {
//         image: "https://via.placeholder.com/600x200.png",
//         author: "Jean-Remy Duboc",
//         title: "Article",
//     },
//     {
//         image: "https://via.placeholder.com/600x200.png",
//         author: "Jean-Remy Duboc",
//         title: "Article",
//     },
//     {
//         image: "https://via.placeholder.com/600x200.png",
//         author: "Jean-Remy Duboc",
//         title: "Article",
//     },
//     {
//         image: "https://via.placeholder.com/600x200.png",
//         author: "Jean-Remy Duboc",
//         title: "Article",
//     },
// ];

const Article = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await fetch("http://localhost:3001/");
            const data = await res.json();
            setArticles(data);
        };
        getArticles();
    }, []);
    return (
        <>
            {articles.map((article, index) => (
                <Card key={index} className="my-3 p-5 text-start">
                    {/* {index === 0 && (
                        <Card.Img variant="top" src={article.image} />
                    )} */}
                    <Card.Title className="w-100 m-auto">
                        <Card.Text>
                            <Link
                                className="text-decoration-none text-dark"
                                to={article.author.username}
                            >
                                {article.author.firstname}
                                {article.author.lastname}
                            </Link>
                        </Card.Text>
                    </Card.Title>
                    <Card.Body className="w-100 m-auto">
                        <Link
                            className="text-decoration-none text-dark"
                            to={`article/${article.title}`}
                        >
                            <Card.Text>{article.title}</Card.Text>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default Article;
