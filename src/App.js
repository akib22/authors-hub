import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Authors from './pages/Authors';
import FavoriteAuthors from './pages/FavoriteAuthors';

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <Routes>
          <Route path="/" element={<Authors />} />
          <Route path="/fav-authors" element={<FavoriteAuthors />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
