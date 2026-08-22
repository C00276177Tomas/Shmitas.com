// By: Tomas Smitas
// Date: 2024 -> current
// Development: Assisted by chatGPT

import { HashRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Portfolio from './Portfolio';
import TeamPlayAnalysis from './TeamPlayAnalysis';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Portfolio" element={<Portfolio />} />
		<Route path="/TeamPlayAnalysis" element={<TeamPlayAnalysis />} />
      </Routes>
    </HashRouter>
  );
}

export default App;