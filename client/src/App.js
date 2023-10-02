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

      {(typeof backendData.posts === "undefined") ? (
        <p>Loading...</p>
      ): (

        backendData.posts.map((posted) => <UserPost key={posted.key} username={posted.username} header={posted.header} postText={posted.postText} likes={posted.likes} />)
      )}
      <WholeUserPost />
    </div>
  );
}

export default App;
