import { Nav } from "react-bootstrap";

import Article from "../articleList/ArticleList";

const ArticleList = () => {
    return (
        <>
            <Nav>
                <Nav.Item className="d-flex px-5 py-3">
                    <Nav.Link>Relevant</Nav.Link>
                    <Nav.Link>Latest</Nav.Link>
                    <Nav.Link>Top</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="px-5">
                <Article />
            </div>
        </>
    );
};

export default ArticleList;
