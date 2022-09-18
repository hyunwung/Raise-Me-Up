import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BookShelf from './components/BookShelf/BookShelf';
import Login from './components/Login/Login';
import SignUp from './components/signup/SignUp';
import Profile from './components/profile/Profile';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path={`${process.env.PUBLIC_URL}/:id`} element={<Layout></Layout>}></Route> */}
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login></Login>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/signup`} element={<SignUp></SignUp>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/mypage`} element={<Profile></Profile>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/bookshelf`} element={<BookShelf></BookShelf>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/books/:id`} element={<Layout></Layout>}></Route>
      </Routes>
    </>
  );
}

export default App;