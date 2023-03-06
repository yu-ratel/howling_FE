import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profile from './Profile';
import KakaoMap from './Map/KakaoMap';
import Start from './Start';

function App() {
  const [page, pageSet] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      pageSet(true);
    }, 2500);
  });

  return (
    <BrowserRouter>
      {/* <Profile /> */}
      <Routes>
        {page === true ? <Route path="/" element={<KakaoMap />} /> : <Route path="/" element={<Start />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
