import Navbar from './components/Navbar.jsx'; // Corrected import syntax for Navbar
import Home from './pages/Home.jsx'; // Import Home component
import './App.css';
import './App1.css';


function App() {
  return (
    <div className="App">
      <Navbar /> {/* Use Navbar component here */}
      <Home /> {/* Use Home component here */}
    </div>
  );
}

export default App;
