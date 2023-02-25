import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoMap from './Map/KakaoMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KakaoMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
