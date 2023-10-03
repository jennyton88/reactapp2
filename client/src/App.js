import React, {useState, useEffect} from 'react';
import './App.css';
import UserPost from "./components/UserPost";
import WholeUserPost from "./components/WholeUserPost";

// const postData = [
//   {key: "Person-What-is-the-future?", username: "Person", header: "What is the future?", postText: "AI", likes: 0},
//   {key: "Person2-Dogs-are-good-pets", username: "Person2", header: "Dogs are good pets", postText: "Source? me", likes: 3}
// ];

// const postDisplay = postData.map((posted) => <UserPost key={posted.key} username={posted.username} header={posted.header} postText={posted.postText} likes={posted.likes} />);


function App() {
  //const [backendData, setBackendData] = useState([{}]);
  const [backendData, setBackendData] = useState(null);
  const [parsedData, setParsedData] = useState([{}]);

  const [username, setUsername] = useState("");
  const [header, setHeader] = useState("");
  const [userText, setUserText] = useState("");
  const [userLikes, setUserLikes] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
    .then(
      response => response.json())
      .then(data => {
        console.log("original", data);
        setBackendData(data);
      }
    )
  }, []);

  function updateData() {
    setUserLikes(1);

    const test = {
        "key": username + header,
        "username": username,
        "header": header,
        "postText": userText, 
        "likes": 1000
    }

    fetch("/posts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(test)
    }).then(
      response => response.json(),
    ).then(
      data => {
        console.log("new", data);
        setBackendData(data);
      }
    )
  }

  return (
    <div className="App">
      <textarea className="username" value={username} onChange={e => setUsername(e.target.value)}></textarea>
      <br></br>
      <textarea className="header" value={header} onChange={e => setHeader(e.target.value)}></textarea>
      <br></br>
      <textarea className="userText" value={userText} onChange={e => setUserText(e.target.value)}></textarea>
      <br></br>
      <button onClick={() => updateData()}>Add posts</button>

      {(typeof backendData.posts === "undefined") ? (
        <p>Loading...</p>
      ): (

        backendData.posts.map((posted) => <UserPost key={posted.key} username={posted.username} header={posted.header} postText={posted.postText} likes={posted.likes} />)
      )}
      {/* <WholeUserPost /> */}
    </div>
  );
}

export default App;
