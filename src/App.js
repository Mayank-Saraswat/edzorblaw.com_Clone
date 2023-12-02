import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import AppRoutes from './components/Routes'

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;