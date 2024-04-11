import './App.css';
import Footer from './component/Footer.js';
import MainPage from './page/MainPage.js';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage.js';
import BodPage from './page/BodPage.js';
import ReviewPage from './page/ReviewPage.js';
import CommentPage from './page/CommentPage.js';


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
      <div className='main-container'>
      <MainPage />
      {/* <HomePage /> */}
      <Routes>
       <Route path="/" element={<HomePage/>}></Route>
        <Route path="comment-page" element={<CommentPage />} />
        <Route path="review-page" element={<ReviewPage />} />
        <Route path="bod/:bodId" element={<BodPage />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;