import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/homePage/HomePage";
import Posts from "./components/posts/Posts";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Post from "./components/Post/Post";
import SinglePost from "./components/SinglePost/SinglePost";

function App() {

  const user = true //look at this if routing isnt working 

  return (
    <Router> 
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/register">{user ? <HomePage/> : <Register />}</Route>
          <Route exact path="/login">{user ? <HomePage/> : <Login />}</Route>
          <Route exact path="/write">{user ? <Write/> : <Register/>}</Route>
          <Route exact path="/settings">{user ? <Settings/> : <Register/>}</Route>
        <Route exact path="/post/:postId">
        <SinglePost />
      </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
