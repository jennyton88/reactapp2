import React, {useState, useEffect} from 'react';

export default function WholeUserPost() {
    const [count, setCount] = useState(0); // right now not accounting for user like a post once
    const [saveComment, setComment] = useState("");
    const [textContent, setTextContent] = useState("");
  
    function createNewComment(textContent) {
      setComment(textContent);
    }
  
    return (
      <div className="whole-post-box">
        <p>Username</p>
        <h2>Whole Post Header</h2>
        <div className="whole-post-content">
          <p>text content </p>
        </div>
        <div className="whole-post-bottom-content">
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <th><button onClick={() => setCount(1)}>like {count}</button></th>
                <th><button>comment</button></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="whole-post-comment-box">
          <textarea className="whole-post-comment-textarea" value={textContent} onChange={e => setTextContent(e.target.value)}></textarea>
          <button onClick={() => createNewComment(textContent)}>Comment</button>
          <p>{saveComment}</p>
        </div>
      </div>
    )
  }
  