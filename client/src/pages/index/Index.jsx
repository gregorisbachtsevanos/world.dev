import Sidebar from "../../components/sidebar/Sidebar";
import Trending from "../../components/trending/Trending";
import User from "./User";
import Visitor from "./Visitor";

const Index = ({ user }) => {
    return (
        <div className="row">
            <div className="col-3">
                <Sidebar user={user} />
            </div>
            <div className="col-6">
                {user ? <User user={user} /> : <Visitor />}
            </div>
            <div className="col-3">
                <Trending />
            </div>
        </div>
    );
};

export default Index;
