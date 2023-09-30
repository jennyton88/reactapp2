import React, {useState} from 'react';

export default function UserPost(props) {
    const [count, setCount] = useState(0);

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
                <th><button onClick={() => setCount(1)}>like {props.likes + count}</button></th>
                <th><button>comment</button></th>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    )
}
