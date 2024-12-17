import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';    
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container-fluid">

                <h1 className="navbar-brand">Client-Side-Routing</h1>

                <ul className="nav nav-tabs ms-auto mt-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AboutUs" className="nav-link" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ContactUs" className="nav-link" >Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
