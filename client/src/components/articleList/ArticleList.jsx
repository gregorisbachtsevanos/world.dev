import { Nav } from "react-bootstrap";

import Article from "../../components/article/Article";

const ArticleList = () => {
    return (
        <>
            <Nav>
                <Nav.Item className="d-flex">
                    <Nav.Link>Relevant</Nav.Link>
                    <Nav.Link>Latest</Nav.Link>
                    <Nav.Link>Top</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="p-2">
                <Article />
            </div>
        </>
    );
};

export default ArticleList;
