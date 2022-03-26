import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';

const Authors = React.lazy(() => import('./pages/Authors'));
const FavoriteAuthors = React.lazy(() => import('./pages/FavoriteAuthors'));

function App() {
  return (
    <div className="App">
      <Header />

      <Suspense fallback={<div className="text-center">Loading</div>}>
        <Container>
          <Routes>
            <Route path="/" element={<Authors />} />
            <Route path="/fav-authors" element={<FavoriteAuthors />} />
          </Routes>
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
