import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Menu from './Menu';
import NoPermission from './components/NoPermission';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/norole" element={<NoPermission />} />
            <Route path='*' element={<Menu />} />
          </Routes>
    </Router>
  );
}

export default App;

