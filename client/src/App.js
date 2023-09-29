import React, {useState} from 'react';
import './App.css';

function App() {
  // const arr = [];
  //const [testDiv, setTestDiv] = useState(arr);

  // function makeDivs() {
  //   arr.push(<BoxedContent />);
  //   const arrDivs = arr.map(postDiv => <BoxedContent />);
  //   return <div>{arrDivs}</div>;
  // }
  return (
    <div className="App">
      {/* <button onClick={() => makeDivs()}>Add a boxed Content</button> */}
      {/* <AddPost /> */}
      <BoxedContent />
      <BoxedContent />
      <BoxedContent />
      <BoxedContent />
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

// function AddPost() {
//   return(
//     <div>
//       <button>Add a post</button>
//     </div>
//   )
// }


function BoxedContentWholePost() {
  const [count, setCount] = useState(0); // right now not accounting for user like a post once
  const [saveComment, setComment] = useState("");
  const [textContent, setTextContent] = useState("");
  // const [numOfDivs, setNumOfDivs] = useState(0);
  // const [divs, setDivs] = useState(null);

  function createNewComment(textContent) {
    setComment(textContent);
    // setNumOfDivs(numOfDivs + 1);
  }

  // function createCommentDivs() {

  // }

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

// function AddCommentDiv({textContent}) {
//   return (
//     <div>
//       <p>{textContent}</p>
//     </div>
//   )
// }


// function AddPost() {
//   return (
//     <div className="add-post-button">
//       <button id="add-post">+</button>
//     </div>
//   )
// }




export default App;
