import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddPost />
      <BoxedContent />
      <BoxedContentWholePost />
    </div>
  );
}

//base area
function BoxedContent() {
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
              <th><button>like</button></th>
              <th><button>comment</button></th>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

function AddPost() {
  return(
    <div>
      <button>Add a post</button>
    </div>
  )
}


function BoxedContentWholePost() {
  const [count, setCount] = useState(0); // right now not accounting for user like a post once
  const [saveComment, setComment] = useState("");
  const [textContent, setTextContent] = useState("");

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
        <button onClick={() => setComment(textContent)}>Comment</button>
        <p>{saveComment}</p>
      </div>
    </div>
  )
}


// function AddPost() {
//   return (
//     <div className="add-post-button">
//       <button id="add-post">+</button>
//     </div>
//   )
// }




export default App;
