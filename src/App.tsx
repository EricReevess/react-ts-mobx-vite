import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import Pages from './view/Pages';

function App() {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router>
        <Routes>
          <Route key="/home" path="/" element={<Home />} />
          <Route key="/about" path="/about" element={<About />} />
          <Route key="/pages" path="/pages" element={<Pages />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
