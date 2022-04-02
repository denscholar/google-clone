import Navbar from './components/Navbar/Navbar';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
