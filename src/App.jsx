import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from './Main';

function App() {
  const [page, pageSet] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      pageSet(true);
    }, 2500);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
