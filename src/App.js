import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Header />

      
      {/* post and side menu container */}
      <div style={{  }}>
        <div style={{ width: "70%" }}>
          {/* post  */}
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          {/* ==post== */}
        </div>
      </div>
      {/* post and side menu container */}

      {/* <div style={{ width: "70%" }}>
        <Post />
      </div> */}

    </div>
  );
}

export default App;
