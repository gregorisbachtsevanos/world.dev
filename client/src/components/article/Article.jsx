import Card from "react-bootstrap/Card";

const articles = [
    {
        image: "https://via.placeholder.com/600x200.png",
        author: "Jean-Remy Duboc",
        title: "Article",
    },
    {
        image: "https://via.placeholder.com/600x200.png",
        author: "Jean-Remy Duboc",
        title: "Article",
    },
    {
        image: "https://via.placeholder.com/600x200.png",
        author: "Jean-Remy Duboc",
        title: "Article",
    },
    {
        image: "https://via.placeholder.com/600x200.png",
        author: "Jean-Remy Duboc",
        title: "Article",
    },
    {
        image: "https://via.placeholder.com/600x200.png",
        author: "Jean-Remy Duboc",
        title: "Article",
    },
];

const Article = () => {
    return (
        <>
            {articles.map((article, index) => (
                <Card key={index} className="my-2 text-start">
                    {index === 0 && (
                        <Card.Img variant="top" src={article.image} />
                    )}
                    <Card.Title className="w-75 m-auto">
                        <Card.Text>{article.author}</Card.Text>
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
