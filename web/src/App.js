import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
