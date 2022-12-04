import { useState } from "react";
import { Form, Button, FloatingLabel, Container } from "react-bootstrap";

const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        setError(null);
        e.preventDefault();
        const res = await fetch("http://localhost:3001/new-article", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body }),
        });

        if (res.status !== 200) {
            setError("Something went wrong");
        }
        const data = await res.json();
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit} className="w-50">
            <h4>Article</h4>
            <Form.Group className="mb-3">
                <Container className="form-label">
                    <span>Title</span>
                    <Form.Control
                        type="text-control"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        name="title"
                    />
                </Container>
            </Form.Group>
            <Form.Group className="mb-3">
                <Container className="form-label">
                    <span>Body</span>
                    <FloatingLabel>
                        <Form.Control
                            type="text"
                            className="form-control"
                            onChange={(e) => setBody(e.target.value)}
                            required
                            name="body"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>
                </Container>
            </Form.Group>
            <Button type="submit">Submit</Button>
            {error && <p>{error}</p>}
        </Form>
    );
};

export default CreateArticle;
