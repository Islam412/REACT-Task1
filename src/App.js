import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Header />

      
      {/* post and side menu container */}
      {/* post  */}
      <Post />
      {/* ==post== */}
      {/* post and side menu container */}

      {/* <div style={{ width: "70%" }}>
        <Post />
      </div> */}

    </div>
  );
}

export default App;
