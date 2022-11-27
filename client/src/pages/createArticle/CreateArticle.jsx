import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const hanldeSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={hanldeSubmit}>
            <h4>Article</h4>
            <Form.Group className="mb-3">
                <Form.Label className="form-label">
                    <span>Title</span>
                    <Form.Control
                        type="text-control"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        name="title"
                    />
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="form-label">
                    <span>Body</span>
                    <Form.Control
                        type="text"
                        className="form-control"
                        onChange={(e) => setBody(e.target.value)}
                        required
                        name="body"
                    />
                </Form.Label>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default CreateArticle;
