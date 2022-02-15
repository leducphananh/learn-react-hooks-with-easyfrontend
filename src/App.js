import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './App.scss';
import BoxPage from './pages/BoxPage';
import ClockPage from './pages/ClockPage';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import TodosPage from './pages/TodosPage';

// Optimize import for Windows: Alt + Shift + O

function App() {

  document.title = 'Welcome to React Hooks!';

  return (
    <div className="app" style={{ paddingLeft: "32px" }}>

      <Nav tabs>
        <NavItem>
          <NavLink>
            <Link to="/learn-react-hooks-with-easyfrontend">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/clock">Clock</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/box">Box</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/todos">Todos</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/posts">Posts</Link>
          </NavLink>
        </NavItem>
      </Nav>

      <Routes>
        <Route path="/learn-react-hooks-with-easyfrontend" element={<HomePage />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/box" element={<BoxPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>

      {/* <Hero name='Lê Đức Phan Anh' /> */}
    </div>
  );
}

export default App;
