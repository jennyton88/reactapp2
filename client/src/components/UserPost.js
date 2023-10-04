import React, {useState} from 'react';

export default function UserPost({username, header, postText, likes}) {
    const [likedPost, setLikedPost] = useState(false);
    const [totalLikes, setTotalLikes] = useState(likes);

    function changeLikes() {
      if (!likedPost) {
        setLikedPost(true);
        setTotalLikes(totalLikes + 1);
      } else {
        setLikedPost(false);
        setTotalLikes(totalLikes - 1);
      }
    }

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
                <th><button onClick={() => changeLikes()}>like {totalLikes}</button></th>
                <th><button>comment</button></th>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    )
}
