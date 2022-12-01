import { Global } from "../styles/Header.styled"
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Global>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-movie">Add a movie</Link></li>
            </ul>
        </Global>
    )
}