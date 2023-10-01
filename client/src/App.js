import React, {useState, useEffect} from 'react';
import './App.css';
import UserPost from "./components/UserPost";

const postData = [
  {key: "Person-What-is-the-future?", username: "Person", header: "What is the future?", postText: "AI", likes: 0},
  {key: "Person2-Dogs-are-good-pets", username: "Person2", header: "Dogs are good pets", postText: "Source? me", likes: 3}
];

const postDisplay = postData.map((posted) => <UserPost key={posted.key} username={posted.username} header={posted.header} postText={posted.postText} likes={posted.likes} />);




function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, []);

  return (
    <div className="App">
      {postDisplay}
      <BoxedContentWholePost />
    </div>
  );
}



function BoxedContentWholePost() {
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
        <p>text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content </p>
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



export default App;
