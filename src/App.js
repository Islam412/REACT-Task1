import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';

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
      {/* ==post and side menu container== */}

      {/* side menu */}
      <div>
        <SideMenu />
      </div>
      {/* ==side menu== */}
      </div>

    </div>
  );
}

export default App;
