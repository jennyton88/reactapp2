
export default function CreateUserPost() {
    
    return (
        <div className="post-box">
            <p>{username}</p>
            <h2>{header}</h2>
            <div className="post-content">
                <p>{postText}</p>
            </div>
            <div className="bottom-content">
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <th><button onClick={() => changeLikes()}>like {likes}</button></th>
                        <th><button>comment</button></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}