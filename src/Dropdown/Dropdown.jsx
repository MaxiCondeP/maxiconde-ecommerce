import { Link } from "react-router-dom";
import "./Dropdown.css"


export const Dropdown = () => {
   
    return (

        <div className="dropDown">
            <Link to={`/categoria/nacionales`}>
                <li>Nacionales</li>
            </Link>
            <Link to={`/categoria/importados`}>
                <li>Importados</li>
            </Link>
        </div>

    );
}