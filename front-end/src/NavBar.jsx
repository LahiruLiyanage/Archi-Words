import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <div className="logo">
                Archi Words
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/articles'>Articles</Link>
                </li>
            </ul>
        </nav>
    )
}