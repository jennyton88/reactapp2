
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <AddPost /> */}
      <p>text</p>
      <BoxedContent />
      <p>text</p>
    </div>
  );
}

function BoxedContent() {
  return (
    <div className="post-box">
      <p>Text1</p>
      <div className="post-content">
        <p>Text</p>
        <div className="extra-content">
          <p>Text2</p>
        </div>
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
