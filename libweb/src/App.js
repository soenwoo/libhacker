import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Explorer from './Explorer';
import Personal from './Personal';
import BookInfo from './BookInfo';
import PersonalResult from './PersonalResult';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/explorer/*" element={<Explorer />}></Route>
            <Route path="/personalresult/*" element={<PersonalResult />}></Route>
            <Route path="/personal/*" element={<Personal />}></Route>
            <Route path="/bookinfo/*" element={<BookInfo />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
