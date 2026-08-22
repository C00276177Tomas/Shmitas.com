// By: Tomas Smitas
// Date: 2024 -> current
// Development: Assisted by chatGPT

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Portfolio from './Portfolio';
import TeamPlayAnalysis from './TeamPlayAnalysis';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Portfolio" element={<Portfolio />} />
		<Route path="/TeamPlayAnalysis" element={<TeamPlayAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;