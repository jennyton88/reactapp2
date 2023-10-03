import React, {useState, useEffect} from 'react';

export default function UserPost(props) { // change to props => {username, header, postText} simplfy below
    const [liked, setLike] = useState(false);

    function changeLikes() {
        setLike(liked);
        if (liked) {
        } else {
        }
    }

    return (
      <div className="post-box">
        <p>{props.username}</p>
        <h2>{props.header}</h2>
        <div className="post-content">
            <p>{props.postText}</p>
        </div>
        <div className="bottom-content">
            <table>
              <thead></thead>
              <tbody>
                <tr>
                <th><button onClick={() => changeLikes()}>like {props.likes}</button></th>
                <th><button>comment</button></th>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    )
}
