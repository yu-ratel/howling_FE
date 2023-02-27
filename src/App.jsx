import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import KakaoMap from './Map/KakaoMap';

function App() {
  return (
    <BrowserRouter>
      <Profile />
      <Routes>
        <Route path="/" element={<KakaoMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
