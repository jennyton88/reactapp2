import React, {useState, useEffect} from 'react';
import './App.css';
import UserPost from "./components/UserPost";
import WholeUserPost from "./components/WholeUserPost";
import TopBar from "./components/TopBar";
import CreateUserPost from './components/CreateUserPost';
import FrontPage from './components/FrontPage';


import Feed from './components/Feed';

function App() {
  // const [backendData, setBackendData] = useState([{}]);
  // const [parsedData, setParsedData] = useState([{}]);

  // const [username, setUsername] = useState("");
  // const [header, setHeader] = useState("");
  // const [userText, setUserText] = useState("");

  // useEffect(() => {
  //   fetch("/posts").then(
  //     response => response.json()).then(data => {
  //       console.log("original", data);
  //       setBackendData(data);
  //     }
  //   )
  // }, []);

  // function updateData() {

  //   const test = {
  //       "key": username + header,
  //       "username": username,
  //       "header": header,
  //       "postText": userText, 
  //       "likes": 1000
  //   }

  //   fetch("/posts", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(test)
  //   }).then(
  //     response => response.json(),
  //   ).then(
  //     data => {
  //       console.log("new", data);
  //       setBackendData(data);
  //     }
  //   )
  // }

  // return (
  //   <div className="App">
  //     <TopBar />

  //     <Feed />
  //     {/* <textarea className="username" value={username} onChange={e => setUsername(e.target.value)}></textarea>
  //     <br></br>
  //     <textarea className="header" value={header} onChange={e => setHeader(e.target.value)}></textarea>
  //     <br></br>
  //     <textarea className="userText" value={userText} onChange={e => setUserText(e.target.value)}></textarea>
  //     <br></br>
  //     <button onClick={() => updateData()}>Add posts</button> */}

  //     {/* {(typeof backendData.posts === "undefined") ? (
  //       <p>Loading...</p>
  //     ): (
  //       backendData.posts.map((posted) => <UserPost key={posted.key} username={posted.username} header={posted.header} postText={posted.postText} likes={posted.likes} />)
  //     )} */}
  //     <CreateUserPost />
  //   </div>
  // );


  return (
    <div className='App'>
      <TopBar />
      <FrontPage />
    </div>
  )
}

export default App;
