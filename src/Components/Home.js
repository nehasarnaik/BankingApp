import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './script.css'

const  Home = () => {
    return ( 
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link className="nav-link"></Link>
                </li>
                <li class="nav-item">
                    <Link to={'/register'} class="nav-link padding">Self Register</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/bankingService'} class="nav-link padding" >Banking as Service</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
     );
}
 
export default Home;
