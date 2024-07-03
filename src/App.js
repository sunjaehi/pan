import './App.css';
import Footer from './component/Footer.jsx';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage.jsx';
import BodPage from './page/BodPage.jsx';
import ReviewPage from './page/ReviewPage.jsx';
import CommentPage from './page/CommentPage.jsx';
import Header from './component/Header.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <HomePage /> */}
      <Routes>
       <Route path="/" element={<HomePage/>}></Route>
        <Route path="comment-page" element={<CommentPage />} />
        <Route path="review-page" element={<ReviewPage />} />
        <Route path="bod/:bodId" element={<BodPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;