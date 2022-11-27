import Sidebar from "../../components/sidebar/Sidebar";
import Trending from "../../components/trending/Trending";
import User from "./User";
import Visitor from "./Visitor";

const Index = ({ user }) => {
    return (
        <div className="row">
            <div className="col-3">
                <Sidebar />
            </div>
            <div className="col-6">{user ? <User /> : <Visitor />}</div>
            <div className="col-3">
                <Trending />
            </div>
        </div>
    );
};

export default Index;
