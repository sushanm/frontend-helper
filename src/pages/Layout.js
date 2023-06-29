import { Outlet, Link } from "react-router-dom";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Home from './Home';

const Layout = () => {
    const navigate = useNavigate();

    const coursesPage = () => {
        navigate("/counter")
    }

    return (
        <>
            <header>
                <Link index to="/" elment={Home}>Home</Link>
            </header>
            


            <Outlet />
        </>
    )
};

export default Layout;
