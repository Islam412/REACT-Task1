import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
      <Header />

      
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* post and side menu container */}
        <div style={{ display: "flex", width: "60%" }}>
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
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
          {/* ==side menu== */}
        </div>
        
      </div>


    </div>
  );
}

export default App;
