import { useEffect, useState } from "react";
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
                <Card key={index} className="my-2 text-start">
                    {/* {index === 0 && (
                        <Card.Img variant="top" src={article.image} />
                    )} */}
                    <Card.Title className="w-75 m-auto">
                        <Card.Text>
                            {article.author.firstname} {article.author.lastname}
                        </Card.Text>
                    </Card.Title>
                    <Card.Body className="w-75 m-auto">
                        <Card.Text>{article.title}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default Article;
