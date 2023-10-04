import {Link} from 'react-router-dom';

export default function TopBar() {
    return (
        <nav className="top-bar">
            <h1>Welcome to the feed!</h1>
            <div className="links-around-feed">
                <Link to="/">Feed</Link>
                <Link to="/create-post">Create post</Link>
            </div>
        </nav>
    )
}