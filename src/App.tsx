import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';

function App() {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router>
        <Routes>
          <Route key="/home" path="/" element={<Home />} />
          <Route key="/about" path="/about" element={<About />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
