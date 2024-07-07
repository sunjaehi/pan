import './App.css';
import Footer from './component/Footer.jsx';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage.jsx';
import BodPage from './page/BodPage.jsx';
import ReviewPage from './page/ReviewPage.jsx';
import CommentPage from './page/CommentPage.jsx';
import Header from './component/Header.jsx';
import NoticePage from './page/NoticePage.jsx';
import LoginPage from './page/LoginPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <HomePage /> */}
      <Routes>
       <Route path="/" element={<HomePage/>}></Route>
        <Route path="comment-page" element={<CommentPage />} />
        <Route path="Reviewpage" element={<ReviewPage />} />
        <Route path="NoticePage" element={<NoticePage />} />
        <Route path="LoginPage" element={<LoginPage />}/>
        <Route path="bod/:bodId" element={<BodPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;