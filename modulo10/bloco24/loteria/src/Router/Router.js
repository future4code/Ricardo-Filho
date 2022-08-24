import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Mega  from '../Pages/Mega/Mega';

export default function Router () {
  return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Mega />} />
    </Routes>
  </BrowserRouter>
  )
}