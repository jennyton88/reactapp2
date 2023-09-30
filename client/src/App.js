import React, {useState} from 'react';
import './App.css';


const postData = [
  {username: "Person", header: "What is the future?", postText: "AI", likes: 0},
  {username: "Person2", header: "Dogs are good pets", postText: "Source? me", likes: 3}
];

const postDisplay = postData.map((posted) => <UserPost username={posted.username} header={posted.header} postText={posted.postText} likes={posted.likes} />);

function UserPost(props) {
  return (
    <div>
      <p>{props.username}</p>
      <h1>{props.header}</h1>
      <p>{props.postText}</p>
      <p>{props.likes}</p>
    </div>
  )
}


function App() {

  return (
    <div className="App">
      {postDisplay}
      <BoxedContentWholePost />
    </div>
  );
}

//base area
function BoxedContent() {
  const [count, setCount] = useState(0);

  return (
    <div className="post-box">
      <p>Username</p>
      <h2>Header</h2>
      <div className="post-content">
        <p>text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content text content </p>
        </div>
        <div className="bottom-content">
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
    </div>
  )
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
