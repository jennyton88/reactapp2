
import './App.css';

function App() {
  return (
    <div className="App">
      <BoxedContent />
    </div>
  );
}

function BoxedContent() {
  return (
    <div className="post-box">
      <p>Username</p>
      <h2>Header</h2>
      <div className="post-content">
        <p>text content</p>
        </div>
        <div className="like-content">
          <table>
            <tr>
              <th>like</th>
              <th>comment</th>
            </tr>
          </table>
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
