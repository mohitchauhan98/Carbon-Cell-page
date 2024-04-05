import './App.css';
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import RootLayout from './RootLayout/RootLayout';
import Home from './pages/Home/Home';

function App() {
  return (
    <RootLayout>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />}/>
        </Routes>
      </Router>
    </RootLayout>
  );
}

export default App;
