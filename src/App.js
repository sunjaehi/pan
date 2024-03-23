import './App.css';
import BoardList from './component/BodList.js';
import Header from './component/Header.js';
import MainPage from './page/MainPage.js';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage.js';
import BodPage from './page/BodPage.js';
import ReviewPage from './page/ReviewPage.js';


const MainTitle=styled.div`
    font-size:40px;
    font-weight:bold;
    text-align:center;
    padding:10px;
    color:grey;
    background-color:azure;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitle>Board</MainTitle>
      <hr />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="home-page" element={<HomePage />} />
        <Route path="bod-page" element={<BodPage />} />
        <Route path="review-page" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;